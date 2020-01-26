const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');
const Proposition = require('../lib/Proposition');

const at = new Proposition(new Quantity("universal"), new Term("Dogs"), new Quality("affirmative"), new Term("animals"), "true")
const et = new Proposition(new Quantity("universal"), new Term("Dogs"), new Quality("negative"), new Term("animals"), "true")
const itrue = new Proposition(new Quantity("particular"), new Term("Dogs"), new Quality("affirmative"), new Term("animals"), "true")
const t = new Term("Dogs")
const animals = new Term("animals")

it('Term has label', () => {
  const result = t.label
  expect(result).toBe("Dogs")
});
it('Term subject distribution with universal quantity', () => {
  const result = t.distribution(at)
  expect(result.label).toBe("distributed")
});
it('Term subject distribution with particular quantity', () => {
  const result = t.distribution(itrue)
  expect(result.label).toBe("undistributed")
});
it('Term predicate distribution with affirmative quality', () => {
  const result = animals.distribution(at)
  expect(result.label).toBe("undistributed")
});
it('Term predicate distribution with negative quality', () => {
  const result = animals.distribution(et)
  expect(result.label).toBe("distributed")
});
