const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');
const Proposition = require('../lib/Proposition');

class PropositionType {
  constructor(type, truthvalue){
    this.type = type
    this.label = type
    this.truthvalue = truthvalue
  }
  quantity(){
    if (this.label === "A"){
      return new Quantity("universal")
    }
    else if (this.label === "E"){
      return new Quantity("universal")
    }
    else if (this.label === "I"){
      return new Quantity("particular")
    }
    else if (this.label === "O"){
      return new Quantity("particular")
    }
  }
  quality(){
    if (this.label === "A"){
      return new Quality("affirmative")
    }
    else if (this.label === "E"){
      return new Quality("negative")
    }
    else if (this.label === "I"){
      return new Quality("affirmative")
    }
    else if (this.label === "O"){
      return new Quality("negative")
    }
  }
  proposition(){
    return new Proposition(this.quantity().label, new Term("S").label, this.quality().label, new Term("P").label, this.truthvalue)
  }
}


//export default Dog;
module.exports = PropositionType;
