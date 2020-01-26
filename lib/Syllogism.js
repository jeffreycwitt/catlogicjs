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
        this.negativeFromAffirmativesTest().validity === false){
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
      this.negativeFromAffirmativesTest()
      //need other three tests
    ]
    return report
  }
}


//export default Dog;
module.exports = Syllogism;
