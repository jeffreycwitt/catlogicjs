const Distribution = require('../lib/Distribution');
//import Dog from '../lib/Dog.js'

it('Term has label', () => {
  const d = new Distribution("undistributed")
  const result = d.label
  expect(result).toBe("undistributed")
});
