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
  const result = aaa1.middleTerm()
  expect(result.label).toBe("dogs")
});
it('Syllogism returns undefined for middle term when syllogism fails three term test', () => {
  const ma = new Proposition("universal", "dogs", "affirmative", "animals", "true")
  const mi = new Proposition("universal", "cute things", "affirmative", "pandas", "true")
  const co = new Proposition("universal", "cute things", "affirmative", "animals", "true")
  const invalidaaa1 = new Syllogism(ma, mi, co)
  const result = invalidaaa1.middleTerm()
  expect(result).toBe(undefined)
});
it('Undistributed Middle Test for valid AAA1', () => {
  const result = aaa1.undistributedMiddleTest()
  expect(result.validity).toBe(true)
});
it('Syllogism tests undistributed for INVALID AAA2', () => {
  const ma = new Proposition("universal", "dogs", "affirmative", "animals", "true")
  const mi = new Proposition("universal", "cute things", "affirmative", "animals", "true")
  const co = new Proposition("universal", "cute things", "affirmative", "dogs", "true")
  const invalidaaa2 = new Syllogism(ma, mi, co)
  const result = invalidaaa2.undistributedMiddleTest()
  expect(result.validity).toBe(false)
});
it('Illicit Process Major for valid AAA1', () => {
  const result = aaa1.undistributedMiddleTest()
  expect(result.validity).toBe(true)
});
it('Illicit Process Minor for valid AAA1', () => {
  const result = aaa1.undistributedMiddleTest()
  expect(result.validity).toBe(true)
});
it('Illicit Process Minor for INVALID AAA4', () => {
  const ma = new Proposition("universal", "dogs", "affirmative", "animals", "true")
  const mi = new Proposition("universal", "animals", "affirmative", "cute things", "true")
  const co = new Proposition("universal", "cute things", "affirmative", "dogs", "true")
  const invalidaaa4 = new Syllogism(ma, mi, co)
  const result = invalidaaa4.illicitProcessMinorTest()
  expect(result.validity).toBe(false)
});
it('Illicit Process Major for INVALID AAE3', () => {
  const ma = new Proposition("universal", "animals", "affirmative", "dogs", "true")
  const mi = new Proposition("universal", "animals", "affirmative", "cute things", "true")
  const co = new Proposition("universal", "cute things", "negative", "dogs", "true")
  const invalidaae3 = new Syllogism(ma, mi, co)
  const result = invalidaae3.illicitProcessMajorTest()
  expect(result.validity).toBe(false)
});
it('get figure', () => {
  const result = aaa1.figure()
  expect(result.label).toBe("1")
});
it('get mood', () => {
  const result = aaa1.mood()
  expect(result.label).toBe("AAA")
});
it('get form', () => {
  const result = aaa1.form()
  expect(result.label).toBe("AAA1")
});