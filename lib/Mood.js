const PropositionType = require('../lib/PropositionType');

class Mood {
  constructor(majorType, minorType, conclusionType){
    this.majorType = typeof majorType === "string" ? new PropositionType(majorType) : majorType
    this.minorType = typeof minorType === "string" ? new PropositionType(minorType) : minorType
    this.conclusionType = typeof conclusionType === "string" ? new PropositionType(conclusionType) : conclusionType
    /**
     * @type string
     */
    this.label = this.label()
  }
  label(){
   return this.majorType.label + this.minorType.label + this.conclusionType.label
  }
}

module.exports = Mood;
