const Term = require('../lib/Term');
class Syllogism {
  constructor(major, minor, conclusion){
    //super(name)
    this.major = major
    this.minor = minor
    this.conclusion = conclusion
    this.label = this.label()
  }
  label(){
    return this.major.label +"\n" + this.minor.label + "\n" + this.conclusion.label
  }
  exclusivePremisesTest(){
    const validity = this.major.quality.label === "negative" && this.minor.quality.label === "negative" ? false : true
    const report = {
      testName: "Exclusive Premises",
      validity: validity
    }
    return report
  }
  affirmativeFromNegativeTest(){
    const validity = (this.major.quality.label === "negative" || this.minor.quality.label === "negative") && this.conclusion.quality.label === "affirmative" ? false : true
    const report = {
      testName: "Affirmative Conclusion from a Negative Premise",
      validity: validity
    }
    return report
  }
  negativeFromAffirmativesTest(){
    const validity = (this.major.quality.label === "affirmative" && this.minor.quality.label === "affirmative") && this.conclusion.quality.label === "negative" ? false : true
    const report = {
      testName: "Negative Conclusion from a Affirmative Premises",
      validity: validity
    }
    return report
  }
  //TODO
  //illicitProcessMajor
  //illicitProcessMinor
  //excludedMiddle
  validity(){
    if (this.exclusivePremisesTest().validity === false ||
        this.affirmativeFromNegativeTest().validity === false ||
        this.negativeFromAffirmativesTest().validity === false ||
        this.isThreeTermTest().validity == false ||
        this.conclusionTermMatchTest().validity == false
      ){
          //needs other three tests
      return false
    }
    else{
      return true
    }
  }
  report(){
    const report = [
      this.exclusivePremisesTest(),
      this.affirmativeFromNegativeTest(),
      this.negativeFromAffirmativesTest(),
      this.isThreeTermTest(),
      this.conclusionTermMatchTest(),
      //need other three tests
    ]
    return report
  }
  isThreeTermTest(){
    const termArray = [this.major.subject.label, this.major.predicate.label, this.minor.subject.label, this.minor.predicate.label]
    const unique = termArray.filter((v, i, a) => a.indexOf(v) === i);
    const validity = unique.length === 3 ? true : false
    const report = {
      testName: "Premises are composed of three terms",
      validity: validity
    }
    return report

  }
  //TODO:NOT FINISHED
  conclusionTermMatchTest(){
    const middle = this.middle()
    if (middle){
      const majorTerm = this.major.subject.label === middle.label ? this.major.predicate : this.major.subject
      const minorTerm = this.minor.subject.label === middle.label ? this.minor.predicate : this.minor.subject
      const validity = this.conclusion.subject.label === minorTerm.label && this.conclusion.predicate.label === majorTerm.label ? true : false
      const report = {
        testName: "Conclusion Composed of Major and Minor Terms",
        validity: validity
      }
      return report
    }
    else{
      const report = {
        testName: "Conclusion Composed of Major and Minor Terms",
        validity: false
      }
      return report
    }
  }
  positionOfTerm(term){
    if (this.subject.label === term.label){
      return "subject"
    }
    else if (this.predicate.label === term.label){
      return "predicate"
    }
  }
  middle(){
    const termArray = [this.major.subject.label, this.major.predicate.label, this.minor.subject.label, this.minor.predicate.label]
    if (this.isThreeTermTest().validity){
      return new Term(termArray.filter((v, i, a) => a.indexOf(v) != i)[0]);
    }
  }
}


//export default Dog;
module.exports = Syllogism;
