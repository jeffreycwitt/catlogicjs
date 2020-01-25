const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');

class Proposition {
  constructor(quantity, subject, quality, predicate, truthvalue){
    //super(name)
    this.quantity = new Quantity(quantity)
    this.subject = new Term(subject)
    this.quality = new Quality(quality)
    this.predicate = new Term(predicate)
    this.truthvalue = truthvalue
    this.label = this.label()
  }
  type(){
    if (this.quantity.label === "universal" && this.quality.label === "affirmative" ){
      return new PropositionType("A")
    }
  }
  label(){
    let display_quantity = ""
    let display_quality = ""
    if (this.quantity.label === "universal"){
      if (this.quality.label === "affirmative"){
        display_quantity = "All"
        display_quality = "are"
      }
      else if (this.quality.label === "negative"){
        display_quantity = "No"
        display_quality = "are"
      }
    }
    else if (this.quantity.label === "particular"){
      if (this.quality.label == "affirmative"){
        display_quantity = "Some"
        display_quality = "are"
      }
      else if (this.quality.label == "negative"){
        display_quantity = "Some"
        display_quality = "are not"
      }
    }
    return display_quantity + " " + this.subject.label + " " + display_quality + " " + this.predicate.label
  }
}

module.exports = Proposition;
