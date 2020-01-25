const PropositionType = require('../lib/PropositionType');
//import Dog from '../lib/Dog.js'

const gpt = new PropositionType("A")
it('Proposition Type has label', () => {
  const result = gpt.label
  expect(result).toBe("A")
});
it('Proposition Type has quantity', () => {
  const result = gpt.quantity()
  expect(result.label).toBe("universal")
});
it('Proposition Type has quality', () => {
  const result = gpt.quality()
  expect(result.label).toBe("affirmative")
});
it('Proposition Type has proposition', () => {
  const result = gpt.proposition()
  expect(result.label).toBe("All S are P")
});
it('Proposition Type has false truth value ', () => {
  const p = new PropositionType("A", "false")
  const result = p.proposition()
  expect(result.truthvalue.label).toBe("false")
});
it('Proposition Type has true truth value ', () => {
  const p = new PropositionType("A", "true")
  const result = p.proposition()
  expect(result.truthvalue.label).toBe("true")
});
it('Proposition Type has no specified truth value and defaults to true ', () => {
  const result = gpt.proposition()
  expect(result.truthvalue.label).toBe("true")
});
