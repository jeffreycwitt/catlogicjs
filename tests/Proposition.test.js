const Proposition = require('../lib/Proposition');
const Term = require('../lib/Term');
const Quantity = require('../lib/Quantity');
const Quality = require('../lib/Quality');

const at = new Proposition(new Quantity("universal"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "true")
const af = new Proposition(new Quantity("universal"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "false")
const et = new Proposition(new Quantity("universal"), new Term("dogs"), new Quality("negative"), new Term("animals"), "true")
const ef = new Proposition(new Quantity("universal"), new Term("dogs"), new Quality("negative"), new Term("animals"), "false")
const itrue = new Proposition(new Quantity("particular"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "true")
const ifalse = new Proposition(new Quantity("particular"), new Term("dogs"), new Quality("affirmative"), new Term("animals"), "false")
const ot = new Proposition(new Quantity("particular"), new Term("dogs"), new Quality("negative"), new Term("animals"), "true")
const of = new Proposition(new Quantity("particular"), new Term("dogs"), new Quality("negative"), new Term("animals"), "false")

it('Proposition has quantity', () => {
  const result = at.quantity
  expect(result.label).toBe("universal")
});
it('Proposition has subject', () => {
  const result = at.subject
  expect(result.label).toBe("dogs")
});
it('Proposition has quality', () => {
  const result = at.quality
  expect(result.label).toBe("affirmative")
});
it('Proposition has predicate', () => {
  const result = at.predicate
  expect(result.label).toBe("animals")
});
it('Proposition has UNstated "true" truthvalue', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals")
  const result = p.truthvalue
  expect(result.label).toBe("true")
});
it('Proposition has label', () => {
  const result = at.label
  expect(result).toBe("All dogs are animals")
});
it('Proposition created objects rather than strings', () => {
  const result = at.label
  expect(result).toBe("All dogs are animals")
});
it('Proposition creates contradictory', () => {
  const result = at.contradictory()
  expect(result.label).toBe("Some dogs are not animals")
});
it('Proposition creates contradictory with false truth value', () => {
  const result = af.contradictory()
  expect(result.truthvalue.label).toBe("true")
});
it('Proposition returns proposition type', () => {
  const result = at.type()
  expect(result.label).toBe("A")
});
it('Proposition creates and returns subaltern with correct label', () => {
  const result = at.subaltern()
  expect(result.label).toBe("Some dogs are animals")
});
it('Proposition creates and returns subaltern with correct truth value for "true" A type universal affirmative ', () => {
  const result = at.subaltern()
  expect(result.truthvalue.label).toBe("true")
});
it('Proposition creates and returns subaltern with correct truth value for "false" A type universal affirmative ', () => {
  const result = af.subaltern()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition creates and returns subaltern with correct truth value for "false" I type particular affirmative ', () => {
  const result = ifalse.subaltern()
  expect(result.truthvalue.label).toBe("false")
});
it('Proposition creates and returns subaltern with correct truth value for "true" I type particular affirmative ', () => {
  const result = itrue.subaltern()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition creates and returns converse for A type proposition with correct truth value ', () => {
  const result = at.converse()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition creates and returns converse for E type proposition with correct truth value ', () => {
  const result = ef.converse()
  expect(result.truthvalue.label).toBe("false")
});
it('Proposition creates and returns obverse ', () => {
  const result = at.obverse()
  expect(result.label).toBe("No dogs are not-animals")
});
it('Proposition creates and returns contraposition for true A ', () => {
  const result = at.contrapose()
  expect(result.label).toBe("All not-animals are not-dogs")
});
it('Proposition creates and returns contraposition for true A with correct truth value', () => {
  const result = at.contrapose()
  expect(result.truthvalue.label).toBe("true")
});
it('Proposition creates and returns contraposition for fale E with correct truth value', () => {
  const result = ef.contrapose()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition returns (sub)contrary for true A', () => {
  const result = at.contrary()
  expect(result.truthvalue.label).toBe("false")
});
it('Proposition returns (sub)contrary for false A', () => {
  const result = af.contrary()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition returns (sub)contrary for true E', () => {
  const result = et.contrary()
  expect(result.truthvalue.label).toBe("false")
});
it('Proposition returns (sub)contrary for false E', () => {
  const result = ef.contrary()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition returns (sub)contrary for true I', () => {
  const result = itrue.contrary()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition returns (sub)contrary for false I', () => {
  const result = ifalse.contrary()
  expect(result.truthvalue.label).toBe("true")
});
it('Proposition returns (sub)contrary for true O', () => {
  const result = ot.contrary()
  expect(result.truthvalue.label).toBe("unknown")
});
it('Proposition returns (sub)contrary for false O', () => {
  const result = of.contrary()
  expect(result.truthvalue.label).toBe("true")
});
it('Proposition checks isSameAs', () => {
  const result = ot.isSameAs(at)
  expect(result).toBe(false)
});
it('Proposition checks isSameAs', () => {
  const result = at.isSameAs(at)
  expect(result).toBe(true)
});
