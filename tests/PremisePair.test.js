const PremisePair = require('../lib/PremisePair');
const Proposition = require('../lib/Proposition');

const major = new Proposition("universal", "dogs", "affirmative", "animals", "true")
const minor = new Proposition("universal", "cute things", "affirmative", "dogs", "true")
const pp = new PremisePair(major, minor)

const majorUnmatch = new Proposition("universal", "dogs", "affirmative", "animals", "true")
const minorUnmatch = new Proposition("universal", "sharks", "affirmative", "black", "true")
const pp2 = new PremisePair(majorUnmatch, minorUnmatch)

it('gets major', () => {
  const result = pp.major
  expect(result.label).toBe("All dogs are animals")
});
it('gets minor', () => {
  const result = pp.minor
  expect(result.label).toBe("All cute things are dogs")
});
it('retrieves possible conclusions', () => {
  const result = pp.possibleConclusions()
  expect(result.length).toBe(4)
});
it('retrieves possible syllogisms', () => {
  const result = pp.possibleSyllogisms()
  expect(result.length).toBe(4)
});
it('gets middle term', () => {
  const result = pp.middleTerm()
  expect(result.label).toBe("dogs")
});
it('gets major term', () => {
  const result = pp.majorTerm()
  expect(result.label).toBe("animals")
});
it('gets minor term', () => {
  const result = pp.minorTerm()
  expect(result.label).toBe("cute things")
});
it('passes three term test', () => {
  const result = pp.isThreeTermTest()
  expect(result.validity).toBe(true)
});

// test with unmatching Premisesit('gets major', () => {
it('gets major', () => {
  const result = pp2.major
  expect(result.label).toBe("All dogs are animals")
});
it('gets minor', () => {
  const result = pp2.minor
  expect(result.label).toBe("All sharks are black")
});
it('retrieves possible conclusions', () => {
  const result = pp2.possibleConclusions()
  expect(result.length).toBe(4)
});
it('retrieves possible syllogisms', () => {
  const result = pp2.possibleSyllogisms()
  expect(result.length).toBe(4)
});
it('gets middle term', () => {
  const result = pp2.middleTerm()
  expect(result).toBe(undefined)
});
it('gets major term', () => {
  const result = pp2.majorTerm()
  expect(result).toBe(undefined)
});
it('gets minor term', () => {
  const result = pp2.minorTerm()
  expect(result).toBe(undefined)
});
it('passes three term test', () => {
  const result = pp2.isThreeTermTest()
  expect(result.validity).toBe(false)
});
