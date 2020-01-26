const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');
const PropositionType = require('../lib/PropositionType');
const Truthvalue = require('../lib/Truthvalue');

class Proposition {
  // note: unknown truth values should be "null" rather than undefined.
  // undefined will get changed to "true" through the default parameter setting
  constructor(quantity, subject, quality, predicate, truthvalue="true"){
    //super(name)

    this.quantity = typeof quantity === "string" ? new Quantity(quantity) : quantity
    this.subject = typeof subject === "string" ? new Term(subject) : subject
    this.quality = typeof quality === "string" ? new Quality(quality) : quality
    this.predicate = typeof predicate === "string" ? new Term(predicate) : predicate
    this.truthvalue = typeof truthvalue === "string" ? new Truthvalue(truthvalue) : truthvalue
    this.label = this.label()
  }
  type(){
    if (this.quantity.label === "universal" && this.quality.label === "affirmative" ){
      return new PropositionType("A")
    }
    else if (this.quantity.label == "universal" && this.quality.label === "negative"){
      return new PropositionType("E")
    }
    else if (this.quantity.label == "particular" && this.quality.label === "affirmative"){
      return new PropositionType("I")
    }
    else if (this.quantity.label == "particular" && this.quality.label === "negative"){
      return new PropositionType("O")
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
  contradictory(){
    const quantity = this.quantity.opposite()
    const quality = this.quality.opposite()
    return new Proposition(quantity, this.subject, quality, this.predicate, this.truthvalue.opposite())
  }
  subaltern(){
    const quantity = this.quantity.opposite()
    let truthvalue = "unknown"
    if (this.quantity.label === "universal"){
      if (this.truthvalue.isTrue()){
        truthvalue = this.truthvalue
      }
      // else it remains undefined
    }
    else if (this.quantity.label === "particular"){
      if (!this.truthvalue.isTrue()){
        truthvalue = this.truthvalue // ruby has !this.truthvalue. is this a bug in ruby version? or a bug here ?
      }
      // else it remains undefined
    }
    return new Proposition(quantity, this.subject, this.quality, this.predicate, truthvalue)
  }
  converse(){
    const truthvalue = this.type().label === "A" || this.type().label === "O" ? "unknown" : this.truthvalue
    return new Proposition(this.quantity, this.predicate, this.quality, this.subject, truthvalue)
  }
  obverse(){
    const quality = this.quality.opposite()
    return new Proposition(this.quantity, this.subject, quality, this.predicate.opposite(), this.truthvalue)
  }
  contrapose(){
    const truthvalue = this.type().label === "E" || this.type().label === "I" ? "unknown" : this.truthvalue
    return new Proposition(this.quantity, this.predicate.opposite(), this.quality, this.subject.opposite(), truthvalue)
  }
  contrary(){
    //subcontrary
    if (this.quantity.label === "particular"){
      const quality = this.quality.opposite()
      let truthvalue = "unknown"
      if (!this.truthvalue.isTrue()){
          truthvalue = this.truthvalue.opposite()
      }
      return new Proposition(this.quantity, this.subject, quality, this.predicate, truthvalue)
    }
    //contrary proper
    else if (this.quantity.label === "universal"){
      const quality = this.quality.opposite()
      let truthvalue = "unknown"
      if (this.truthvalue.isTrue()){
          truthvalue = this.truthvalue.opposite()
      }
      const prop = new Proposition(this.quantity, this.subject, quality, this.predicate, truthvalue)
      return prop
    }
  }
  subcontrary(){
    //this.contrary()
  }
}

module.exports = Proposition;
