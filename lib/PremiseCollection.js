const PremisePair = require('../lib/PremisePair');
const Syllogism = require('../lib/Syllogism');

class PremiseCollection {
  constructor(initialPropositions){
    this.initialPropositions = initialPropositions
    this.propositions = []
    this.immediatePropositions = []
    this.setInitialPropositions()
    this.immediateInferencePropositions()
  }
  setInitialPropositions(){
    this.initialPropositions.forEach((p, i) => {
      if (p.truthvalue !== "unknown"){
        this.propositions.push({
          source: "assumed",
          deductionType: "assumed",
          type: "initial",
          proposition: p
        })
      }
    })
  }
  immediateInferencePropositions(){
    this.initialPropositions.forEach((p, i)=>{
      p.immediateInferences().forEach((inf, i2)=>{
        if (inf.truthvalue !== "unknown"){
          const prop = {
            source: p,
            deductionType: "immediateInference",
            type: inf.type,
            proposition: inf.proposition
          }
          this.propositions.push(prop)
          this.immediatePropositions.push(prop)
        }
      })
    })
  }
  // includeUnknown parameter used to create option if user wants all premise pairs, excluding those with unknown truth values, or all possible premise pairs
  premisePairs(includeUnknown = false){
    const pairs = []
   
    // filter out propositions with unknown truth value unless includeUnknown parameter is set to true 
    let usedPropositions = this.propositions.filter((p)=>{
      return p.proposition.truthvalue.label !== "unknown"
    })
    
    if(includeUnknown) {
      usedPropositions = this.propositions
    }
    
    usedPropositions.forEach((p, i) => {
      usedPropositions.forEach((p2, i2) => {
        if (!p.proposition.isSameAs(p2.proposition)){
          pairs.push(new PremisePair(p.proposition, p2.proposition))
        }
      })
    })
    return pairs
  }
  validSyllogisms(includeUnknown = false){
    const validSyllogisms = []
    const pairs = this.premisePairs(includeUnknown)
    pairs.forEach((p, i) => {
      const conclusions = p.possibleConclusions()
      conclusions.forEach((c, i) => {
        const syllogism = new Syllogism(p.major, p.minor, c)
        if (syllogism.validity()){
          validSyllogisms.push(syllogism)
        }
        else{
          null
        }
      })
    })
    return validSyllogisms
  }
  inferredTruths(){
    const newTruths = []
    //const newTruths = [...this.immediatePropositions]
    this.immediatePropositions.forEach((inf) => {
      if (inf.proposition.truthvalue.isTrue()){
        return newTruths.push(inf)
      }
    })
    const validSyllogisms = this.validSyllogisms()
    validSyllogisms.forEach((s, i) => {
      const result = {
        source: s,
        deductionType: "syllogism",
        type: "syllogism Figure Goes here",
        proposition: s.conclusion
      }
      newTruths.push(result)
    })
    return newTruths
  }
  inferredTruthsUnique(){
    const newTruths = []
    const truths = this.inferredTruths()
    const added = []
    const unique = truths.forEach((p, i) => {
      if (!added.includes(p.proposition.label)){
        newTruths.push(p)
      }
      added.push(p.proposition.label)
    })
    return newTruths
  }
}
module.exports = PremiseCollection
