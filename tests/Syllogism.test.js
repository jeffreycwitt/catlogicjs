const Syllogism = require('../lib/Syllogism');
const Proposition = require('../lib/Proposition');

const major = new Proposition("universal", "dogs", "affirmative", "animals", "true")
const minor = new Proposition("universal", "cute things", "affirmative", "dogs", "true")
const conclusion = new Proposition("universal", "cute things", "affirmative", "animals", "true")
const aaa1 = new Syllogism(major, minor, conclusion)

it('Syllogism has label', () => {

  const result = aaa1.label
  expect(result).toBe("All dogs are animals\nAll cute things are dogs\nAll cute things are animals")
});
it('Syllogism test exclusive premises of AAA1 Proposition', () => {
  const result = aaa1.exclusivePremisesTest()
  expect(result.validity).toBe(true)
});
it('Syllogism test affirmativeFromNegativeTest premises of AAA1 Proposition', () => {
  const result = aaa1.affirmativeFromNegativeTest()
  expect(result.validity).toBe(true)
});
it('Syllogism test negativeFromAffirmativesTest premises of AAA1 Proposition', () => {
  const result = aaa1.negativeFromAffirmativesTest()
  expect(result.validity).toBe(true)
});
it('Syllogism tests isThreeTermTest for valid AAA1', () => {
  const result = aaa1.isThreeTermTest()
  expect(result.validity).toBe(true)
});
it('Syllogism tests isThreeTermTest for INVALID AAA1', () => {
  const ma = new Proposition("universal", "dogs", "affirmative", "animals", "true")
  const mi = new Proposition("universal", "cute things", "affirmative", "pandas", "true")
  const co = new Proposition("universal", "cute things", "affirmative", "animals", "true")
  const invalidaaa1 = new Syllogism(ma, mi, co)
  const result = invalidaaa1.isThreeTermTest()
  expect(result.validity).toBe(false)
});
it('Syllogism tests conclusionTermMatchTest for valid AAA1', () => {
  const result = aaa1.conclusionTermMatchTest()
  expect(result.validity).toBe(true)
});
it('Syllogism tests conclusionTermMatchTest for INVALID AAA1', () => {
  const ma = new Proposition("universal", "dogs", "affirmative", "animals", "true")
  const mi = new Proposition("universal", "cute things", "affirmative", "dogs", "true")
  const co = new Proposition("universal", "cute things", "affirmative", "pandas", "true")
  const invalidaaa1 = new Syllogism(ma, mi, co)
  const result = invalidaaa1.conclusionTermMatchTest()
  expect(result.validity).toBe(false)
});
it('Syllogism tests conclusionTermMatchTest for where no middle exists', () => {
  const ma = new Proposition("universal", "pandas", "affirmative", "animals", "true")
  const mi = new Proposition("universal", "cute things", "affirmative", "dogs", "true")
  const co = new Proposition("universal", "cute things", "affirmative", "rabbits", "true")
  const invalidaaa1 = new Syllogism(ma, mi, co)
  const result = invalidaaa1.conclusionTermMatchTest()
  expect(result.validity).toBe(false)
});
it('Syllogism returns middle term', () => {
  const result = aaa1.middle()
  expect(result.label).toBe("dogs")
});
it('Syllogism returns undefined for middle term when syllogism fails three term test', () => {
  const ma = new Proposition("universal", "dogs", "affirmative", "animals", "true")
  const mi = new Proposition("universal", "cute things", "affirmative", "pandas", "true")
  const co = new Proposition("universal", "cute things", "affirmative", "animals", "true")
  const invalidaaa1 = new Syllogism(ma, mi, co)
  const result = invalidaaa1.middle()
  expect(result).toBe(undefined)
});
