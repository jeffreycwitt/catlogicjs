const Figure = require('../lib/Figure');


it('figure has label ', () => {
  const f = new Figure("1")
  const result = f.label
  expect(result).toBe("1")
});
it('figure has label ', () => {
  const f = new Figure("unknown")
  const result = f.label
  expect(result).toBe("unknown")
});
