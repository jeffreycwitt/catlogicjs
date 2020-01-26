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
