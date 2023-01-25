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
  // parameter used to create option if user wants all premise pairs of true statements or all possible premise pairs
  premisePairs(onlyTrue = false){
    const pairs = []
    let usedPropositions = this.propositions
    if (onlyTrue) {
      usedPropositions = this.propositions.filter((p)=>{
        return p.proposition.truthvalue.isTrue()
      })
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
  validSyllogisms(){
    const validSyllogisms = []
    const pairs = this.premisePairs()
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
  // this loop will get sound syllogisms and start from only true premises and then get only valid syllogisms
  soundSyllogisms(){
    const soundSyllogisms = []
    const pairs = this.premisePairs(true)
    pairs.forEach((p, i) => {
      const conclusions = p.possibleConclusions()
      conclusions.forEach((c, i) => {
        const syllogism = new Syllogism(p.major, p.minor, c)
        if (syllogism.validity()){
          soundSyllogisms.push(syllogism)
        }
        else{
          null
        }
      })
    })
    return soundSyllogisms
  }
  inferredTruths(){
    const newTruths = []
    //const newTruths = [...this.immediatePropositions]
    this.immediatePropositions.forEach((inf) => {
      if (inf.proposition.truthvalue.isTrue()){
        return newTruths.push(inf)
      }
    })
    const soundSyllogisms = this.soundSyllogisms()
    soundSyllogisms.forEach((s, i) => {
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
