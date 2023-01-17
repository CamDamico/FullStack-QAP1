// Minimist is a simple library to parse argument options

// This sets the const as argv, Requires the minimist npm, and parses the arguments
const argv = require("minimist")(process.argv.slice(2));

// To set the arguments and parse them type in the terminal:
// ex: node minimist.js -1 57 -2 abc -x true

// If using example above, it will return: { '1': 57, '2': 'abc', _: [], x: 'true' }
console.log(argv);
