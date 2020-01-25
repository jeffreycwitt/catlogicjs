const Quality = require('../lib/Quality');
//import Dog from '../lib/Dog.js'

it('Quality has label', () => {
  const d = new Quality("affirmative")
  const result = d.label
  expect(result).toBe("affirmative")
});
