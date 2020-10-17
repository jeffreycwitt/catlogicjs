const Term = require('../lib/Term');
const PremisePair = require('../lib/PremisePair');
const Form = require('../lib/Form');
const Figure = require('../lib/Figure');
const Mood = require('../lib/Mood');

class Syllogism {
  constructor(major, minor, conclusion){
    //super(name)
    this.major = major.truthvalue.label === "false" ? major.contradictory() : major
    this.minor = minor.truthvalue.label === "false" ? minor.contradictory() : minor
    this.conclusion = conclusion.truthvalue.label === "false" ? conclusion.contradictory : conclusion
    this.label = this.label()
  }
  label(){
    return this.major.label +"\n" + this.minor.label + "\n" + this.conclusion.label
  }
  mood(){
    return new Mood(this.major.type(), this.minor.type(), this.conclusion.type())
  }
  figure(){
    let figure = new Figure("unknown")
    const mt = this.middleTerm()
    if (mt){
      const mjmp = this.major.positionOfTerm(mt)
      const mnmp = this.minor.positionOfTerm(mt)
      if (mjmp == 'subject' && mnmp == 'predicate'){
        figure = new Figure("1")
      }
      else if (mjmp == 'predicate' && mnmp == 'predicate'){
        figure = new Figure("2")
      }
      else if (mjmp == 	'subject' && mnmp == 'subject'){
        figure = new Figure("3")
      }
      else if (mjmp == 'predicate' && mnmp == 'subject'){
        figure = new Figure("4")
      }
    }
    return figure
  }
  form(){
    return new Form(this.mood(), this.figure())
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
  undistributedMiddleTest(){
    if (this.middleTerm()){
      const validity = !this.middleTerm().isDistributed(this.major) && !this.middleTerm().isDistributed(this.minor) ? false : true
      const report = {
        testName: "Undistributed Middle",
        validity: validity
      }
      return report
    }
    else{
      const report = {
        testName: "Undistributed Middle",
        validity: false
      }
      return report
    }
  }
  illicitProcessMajorTest(){
    let validity = true
    if (this.conclusion.predicate.isDistributed(this.conclusion)) {
      if (!this.conclusion.predicate.isDistributed(this.major)){
        validity = false
      }
    }
    const report = {
      testName: "Illicit Process Major",
      validity: validity
    }
    return report
  }
  illicitProcessMinorTest(){
    let validity = true
    if (this.conclusion.subject.isDistributed(this.conclusion)) {
      if (!this.conclusion.subject.isDistributed(this.minor)){
        validity = false
      }
    }
    const report = {
      testName: "Illicit Process Minor",
      validity: validity
    }
    return report
  }
  validity(){
    if (this.exclusivePremisesTest().validity === false ||
        this.affirmativeFromNegativeTest().validity === false ||
        this.negativeFromAffirmativesTest().validity === false ||
        this.isThreeTermTest().validity === false ||
        this.conclusionTermMatchTest().validity === false ||
        this.illicitProcessMajorTest().validity === false ||
        this.illicitProcessMinorTest().validity === false ||
        this.undistributedMiddleTest().validity === false
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
      this.illicitProcessMajorTest(),
      this.illicitProcessMinorTest(),
      this.undistributedMiddleTest(),
      this.isThreeTermTest(),
      this.conclusionTermMatchTest(),
      //need other three tests
    ]
    return report
  }
  isThreeTermTest(){

    const termArray = [this.major.subject.label, this.major.predicate.label, this.minor.subject.label, this.minor.predicate.label]
    const unique = termArray.filter((v, i, a) => a.indexOf(v) === i);
    //const validity = unique.length === 3 ? true : false
    let validity = false
    if (unique.length === 3 && this.major.subject.label != this.major.predicate.label && this.minor.subject.label != this.minor.predicate.label){
      validity = true
    }

    const report = {
      testName: "Premises are composed of three terms",
      validity: validity
    }
    return report

    //TODO a seems to be problem with calling PremisePair here; not sure why
    // const premise = new PremisePair(this.major, this.minor)
    // return premise.isThreeTermTest()

  }
  //TODO:NOT FINISHED
  conclusionTermMatchTest(){
    const middleTerm = this.middleTerm()
    if (middleTerm){
      const majorTerm = this.major.subject.label === middleTerm.label ? this.major.predicate : this.major.subject
      const minorTerm = this.minor.subject.label === middleTerm.label ? this.minor.predicate : this.minor.subject
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
  middleTerm(){
    const termArray = [this.major.subject.label, this.major.predicate.label, this.minor.subject.label, this.minor.predicate.label]
    if (this.isThreeTermTest().validity){
      return new Term(termArray.filter((v, i, a) => a.indexOf(v) != i)[0]);
    }
    else {
      return undefined
    }
    //return new PremisePair(this.major, this.minor).middleTerm()
  }
}


//export default Dog;
module.exports = Syllogism;
