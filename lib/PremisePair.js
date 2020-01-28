const Proposition = require('../lib/Proposition');
const Syllogism = require('../lib/Syllogism');
const Term = require('../lib/Term');

class PremisePair {
  constructor(major, minor){
    //super(name)
    this.major = major
    this.minor = minor
  }
  middleTerm(){
    const termArray = [this.major.subject.label, this.major.predicate.label, this.minor.subject.label, this.minor.predicate.label]
    if (this.isThreeTermTest().validity){
      return new Term(termArray.filter((v, i, a) => a.indexOf(v) != i)[0]);
    }
    else {
      return undefined
    }
  }
  minorTerm(){
    if (this.middleTerm()){
      return this.minor.subject.label === this.middleTerm().label ? this.minor.predicate : this.minor.subject
    }
  }
  majorTerm(){
    if (this.middleTerm()){
      return this.major.subject.label === this.middleTerm().label ? this.major.predicate : this.major.subject
    }
  }
  isThreeTermTest(){
    const termArray = [this.major.subject.label, this.major.predicate.label, this.minor.subject.label, this.minor.predicate.label]
    const unique = termArray.filter((v, i, a) => a.indexOf(v) === i);
    //const validity = unique.length === 3 ? true : false
    let validity = false
    if (unique.length === 3 && this.major.subject.label != this.major.predicate.label && this.minor.subject.label != this.major.predicate.label){
      validity = true
    }
    const report = {
      testName: "Premises are composed of three terms",
      validity: validity
    }
    return report

  }
  //TODO not working in web app, because of order exported in index.js. Not sure what problem is.
  //work around is to use possible conclusions and let client construct syllogism
  possibleSyllogisms(){
    const possibleConclusions = this.possibleConclusions()
    const possibleSyllogisms = possibleConclusions.map((c, i) => {
      const syllogism = new Syllogism(this.major, this.minor, c)
      return syllogism
    })
    return possibleSyllogisms
  }
  possibleConclusions(){
    const minorTerm = this.minorTerm() ? this.minorTerm() : "unknown"
    const majorTerm = this.majorTerm() ? this.majorTerm() : "unknown"
    const possibleConclusions = [
      new Proposition("universal", minorTerm, "affirmative", majorTerm),
      new Proposition("universal", minorTerm, "negative", majorTerm),
      new Proposition("particular", minorTerm, "affirmative", majorTerm),
      new Proposition("particular", minorTerm, "negative", majorTerm),
    ]
    return possibleConclusions
  }
}


module.exports = PremisePair;
