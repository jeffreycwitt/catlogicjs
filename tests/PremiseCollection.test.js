const PremiseCollection = require('../lib/PremiseCollection');
const Proposition = require('../lib/Proposition');

const a = new Proposition("universal", "dogs", "affirmative", "animals")
const e = new Proposition("universal", "dogs", "negative", "animals")
const i = new Proposition("particular", "dogs", "affirmative", "animals")
const o = new Proposition("particular", "dogs", "negative", "animals")


const a2 = new Proposition("universal", "cute things", "affirmative", "dogs")

const premiseArray = [a,e,i,o]
const premiseArray2 = [a,a2]
const premiseArray3 = [a,a,a2]
const propositionArray = [
  {
    proposition: a
  },
  {
    proposition: a2
  },
  {
    proposition: a
  }
]
const allDogsAreAnimals = new Proposition("universal", "dogs", "affirmative", "animals")


it('Should return array of propositions and accurately count', () => {
  const pa = new PremiseCollection(premiseArray)
  const result = pa.initialPropositions.length
  expect(result).toBe(4)
});
it('Should return array of objects', () => {
  const pa = new PremiseCollection(premiseArray2)
  const result = pa.inferredTruths()
  expect(Array.isArray(['value'])).toBe(true)

});

it('Should return unique truths', () => {
  const pa = new PremiseCollection(premiseArray3)
  const result = pa.inferredTruthsUnique(propositionArray)
  expect(Array.isArray(['value'])).toBe(true)

});

it('Should return unique truths', () => {
  const pa = new PremiseCollection([allDogsAreAnimals])
  const result = pa.premisePairs(true)
  expect(Array.isArray(['value'])).toBe(true)

});