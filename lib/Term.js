const Distribution = require('../lib/Distribution');


class Term {
  constructor(termname){
    //super(name)
    this.label = termname
  }
  opposite(){
    return new Term("not-" + this.label)
  }
  distribution(proposition){
    //check if term is in subject position
    if (proposition.subject.label === this.label){
      if (proposition.quantity.label === "universal"){
        return new Distribution('distributed')
      }
      else if (proposition.quantity.label === "particular"){
        return new Distribution('undistributed')
      }
    }
    //check if term is in predicate position
    else if (proposition.predicate.label === this.label){
      if (proposition.quality.label === "affirmative"){
        return new Distribution('undistributed')
      }
      else if (proposition.quality.label === "negative"){
        return new Distribution('distributed')
      }
    }
    else{
      return new Distribution("unknown")
    }
  }
  isDistributed(proposition){
    return this.distribution(proposition).label === "distributed" ? true : false
  }
}


//export default Dog;
module.exports = Term;
