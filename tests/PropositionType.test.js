const PropositionType = require('../lib/PropositionType');
//import Dog from '../lib/Dog.js'

it('Proposition Type has label', () => {
  const d = new PropositionType("A", true)
  const result = d.label
  expect(result).toBe("A")
});
it('Proposition Type has quantity', () => {
  const d = new PropositionType("A", true)
  const result = d.quantity()
  expect(result.label).toBe("universal")
});
it('Proposition Type has quality', () => {
  const d = new PropositionType("A", true)
  const result = d.quality()
  expect(result.label).toBe("affirmative")
});
it('Proposition Type has proposition', () => {
  const d = new PropositionType("A", true)
  const result = d.proposition()
  expect(result.label).toBe("All S are P")
});
