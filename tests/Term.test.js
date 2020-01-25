const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');

it('Term has label', () => {
  const d = new Term("Dogs")
  const result = d.label
  expect(result).toBe("Dogs")
});
it('Term subject distribution with universal quantity', () => {
  const d = new Term("Dogs")
  const result = d.distribution_subject(new Quantity("universal"))
  expect(result.label).toBe("distributed")
});
it('Term subject distribution with particular quantity', () => {
  const d = new Term("Dogs")
  const result = d.distribution_subject(new Quantity("particular"))
  expect(result.label).toBe("undistributed")
});
it('Term predicate distribution with affirmative quality', () => {
  const d = new Term("Dogs")
  const result = d.distribution_predicate(new Quality("affirmative"))
  expect(result.label).toBe("undistributed")
});
it('Term predicate distribution with negative quality', () => {
  const d = new Term("Dogs")
  const result = d.distribution_predicate(new Quality("negative"))
  expect(result.label).toBe("distributed")
});
