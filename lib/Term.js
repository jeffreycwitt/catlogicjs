const Distribution = require('../lib/Distribution');

class Term {
  constructor(termname){
    //super(name)
    this.label = termname
  }
  opposite(){
    return new Term("not-" + this.label)
  }
  distribution_subject(quantity){
    if (quantity.label === "universal"){
      return new Distribution('distributed')
    }
    else if (quantity.label === "particular"){
      return new Distribution('undistributed')
    }
  }
  distribution_predicate(quality){
    if (quality.label === "affirmative"){
      return new Distribution('undistributed')
    }
    else if (quality.label === "negative"){
      return new Distribution('distributed')
    }
  }
}


//export default Dog;
module.exports = Term;
