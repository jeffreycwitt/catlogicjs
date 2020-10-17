const Form = require('../lib/Form');
const Mood = require('../lib/Mood');
const Figure = require('../lib/Figure');


it('Term has label created from integer', () => {
  const form = new Form(new Mood("A", "A", "A"), new Figure("1"))
  const result = form.label
  expect(result).toBe("AAA1")
});
it('Provides correct validity for AAA1', () => {
  const form = new Form(new Mood("A", "A", "A"), new Figure("1"))
  const result = form.syllogism().validity();
  expect(result).toBe(true)
});
it('Provides correct validity for AAA2', () => {
  const form = new Form(new Mood("A", "A", "A"), new Figure("2"))
  const result = form.syllogism().validity();
  expect(result).toBe(false)
});
it('Provides name AAA1', () => {
  const form = new Form(new Mood("E", "A", "E"), new Figure("1"))
  const result = form.name()
  expect(result).toBe("Celarent")
});
it('Provides name AAA1', () => {
  const form = new Form(new Mood("A", "A", "A"), new Figure("2"))
  const result = form.name()
  expect(result).toBe(undefined)
});