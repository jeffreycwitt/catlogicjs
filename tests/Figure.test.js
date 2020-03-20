const Figure = require('../lib/Figure');


it('Term has label created from integer', () => {
  const f = new Figure(1)
  const result = f.label
  expect(result).toBe("1")
});
it('Term has label when created from string', () => {
  const f = new Figure("1")
  const result = f.label
  expect(result).toBe("1")
});
it('Term has label when created from integer return integer', () => {
  const f = new Figure(1)
  const result = f.number
  expect(result).toBe(1)
});