const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');

const t = new Term("Dogs")
it('Term has label', () => {
  const result = t.label
  expect(result).toBe("Dogs")
});
it('Term subject distribution with universal quantity', () => {
  const result = t.distribution_subject(new Quantity("universal"))
  expect(result.label).toBe("distributed")
});
it('Term subject distribution with particular quantity', () => {
  const result = t.distribution_subject(new Quantity("particular"))
  expect(result.label).toBe("undistributed")
});
it('Term predicate distribution with affirmative quality', () => {
  const result = t.distribution_predicate(new Quality("affirmative"))
  expect(result.label).toBe("undistributed")
});
it('Term predicate distribution with negative quality', () => {
  const result = t.distribution_predicate(new Quality("negative"))
  expect(result.label).toBe("distributed")
});
