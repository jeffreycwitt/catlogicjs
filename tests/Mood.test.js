const Mood = require('../lib/Mood');
const PropositionType = require('../lib/PropositionType');


it('Term has label', () => {
  const m = new Mood(new PropositionType("A"), new PropositionType("A"), new PropositionType("A"))
  const result = m.label
  expect(result).toBe("AAA")
});
it('Term has label when created from strings', () => {
  const m = new Mood("A", "E", "I")
  const result = m.label
  expect(result).toBe("AEI")
});