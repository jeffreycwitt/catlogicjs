const Proposition = require('../lib/Proposition');
//import Dog from '../lib/Dog.js'

it('Proposition has quantity', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", true)
  const result = p.quantity
  expect(result.label).toBe("universal")
});
it('Proposition has subject', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", true)
  const result = p.subject
  expect(result.label).toBe("dogs")
});
it('Proposition has quality', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", true)
  const result = p.quality
  expect(result.label).toBe("affirmative")
});
it('Proposition has predicate', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", true)
  const result = p.predicate
  expect(result.label).toBe("animals")
});
it('Proposition has truthvalue', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", true)
  const result = p.truthvalue
  expect(result).toBe(true)
});
it('Proposition has label', () => {
  const p = new Proposition("universal", "dogs", "affirmative", "animals", true)
  const result = p.label
  expect(result).toBe("All dogs are animals")
});
