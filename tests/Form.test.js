const Form = require('../lib/Form');
const Mood = require('../lib/Mood');
const Figure = require('../lib/Figure');


it('Term has label created from integer', () => {
  const form = new Form(new Mood("A", "A", "A"), new Figure(1))
  const result = form.label
  expect(result).toBe("AAA1")
});