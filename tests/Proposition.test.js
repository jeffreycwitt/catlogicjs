const Proposition = require('../lib/Proposition');
const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');

const gp = new Proposition(new Quantity("universal"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "true")

it('Proposition has quantity', () => {
  const result = gp.quantity
  expect(result.label).toBe("universal")
});
it('Proposition has subject', () => {
  const result = gp.subject
  expect(result.label).toBe("dogs")
});
it('Proposition has quality', () => {
  const result = gp.quality
  expect(result.label).toBe("affirmative")
});
it('Proposition has predicate', () => {
  const result = gp.predicate
  expect(result.label).toBe("animals")
});
it('Proposition has UNstated "true" truthvalue', () => {
  const result = gp.truthvalue
  expect(result.label).toBe("true")
});
it('Proposition has stated "true" truthvalue', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", "true")
  const result = p.truthvalue
  expect(result.label).toBe("true")
});
it('Proposition has a stated "false" truth value', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", "false")
  const result = p.truthvalue
  expect(result.label).toBe("false")
});
it('Proposition has label', () => {
  const result = gp.label
  expect(result).toBe("All dogs are animals")
});
it('Proposition created objects rather than strings', () => {
  const result = gp.label
  expect(result).toBe("All dogs are animals")
});
it('Proposition creates contradictory', () => {
  const result = gp.contradictory()
  expect(result.label).toBe("Some dogs are not animals")
});
it('Proposition returns proposition type', () => {
  const result = gp.type()
  expect(result.label).toBe("A")
});
it('Proposition creates and returns subaltern with correct label', () => {
  const result = gp.subaltern()
  expect(result.label).toBe("Some dogs are animals")
});
it('Proposition creates and returns subaltern with correct truth value for "true" A type universal affirmative ', () => {
  const result = gp.subaltern()
  expect(result.truthvalue.label).toBe("true")
});
it('Proposition creates and returns subaltern with correct truth value for "false" A type universal affirmative ', () => {
  const p = new Proposition(new Quantity("universal"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "false")
  const result = p.subaltern()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition creates and returns subaltern with correct truth value for "false" I type particular affirmative ', () => {
  const p = new Proposition(new Quantity("particular"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "false")
  const result = p.subaltern()
  expect(result.truthvalue.label).toBe("false")
});
it('Proposition creates and returns subaltern with correct truth value for "true" I type particular affirmative ', () => {
  const p = new Proposition(new Quantity("particular"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "true")
  const result = p.subaltern()
  expect(result.truthvalue.label).toBe("unknown")
});
