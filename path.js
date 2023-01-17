// The Path Module provides utilities for working with file and directory paths

const path = require("path");

// path.parse(__filename) will parse the file path
var pathObj1 = path.parse(__filename);

// path.parse(__dirname) will parse the directory path
var pathObj2 = path.parse(__dirname);

// Returns the file root, directory, base, extension, and name
console.log(pathObj1);

// Returns the directory root, directory, base, extension, and name
console.log(pathObj2);
