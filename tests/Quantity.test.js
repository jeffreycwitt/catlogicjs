const Quantity = require('../lib/Quantity');
//import Dog from '../lib/Dog.js'

it('Quantity has label', () => {
  const d = new Quantity("universal")
  const result = d.label
  expect(result).toBe("universal")
});
