exports.Term = require('./lib/Term.js');
exports.Mood = require('./lib/Mood.js');
exports.Form = require('./lib/Form.js');
exports.Distribution = require('./lib/Distribution.js');
exports.Proposition = require('./lib/Proposition.js');
exports.Quantity = require('./lib/Quantity.js');
exports.Quality = require('./lib/Quality.js');
exports.PropositionType = require('./lib/PropositionType.js');
exports.Truthvalue = require('./lib/Truthvalue.js');
//TODO order matters here, syllogis calls premise pair and premise pair calls syllogism
// in this order Syllogism will lead to error when it calls Premise Pair
exports.Syllogism = require('./lib/Syllogism.js');
//but if flipped, then premise pair will case error when it calls Syllogism
exports.PremisePair = require('./lib/PremisePair.js');
exports.PremiseCollection = require('./lib/PremiseCollection.js');
