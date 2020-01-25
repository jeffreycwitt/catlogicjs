const Truthvalue = require('../lib/Truthvalue');
//import Dog from '../lib/Dog.js'

it('Truthvalue has label', () => {
  const t = new Truthvalue("true")
  const result = t.label
  expect(result).toBe("true")
});
it('When truthvalue is true Truthvalue answers true (boolean) for isTrue method', () => {
  const t = new Truthvalue("true")
  const result = t.isTrue()
  expect(result).toBe(true)
});
it('When truthvalue is false Truthvalue answers false (boolean) for isTrue method', () => {
  const t = new Truthvalue("false")
  const result = t.isTrue()
  expect(result).toBe(false)
});
it('When truthvalue is unknown Truthvalue answers false (boolean) for isTrue method', () => {
  const t = new Truthvalue("unknown")
  const result = t.isTrue()
  expect(result).toBe(false)
});
