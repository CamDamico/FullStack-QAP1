// The OS Module provides operating system-related utility methods and properties

const os = require("os");

// os.totalmem returns the amount of total system memory
var totalMemory = os.totalmem();

// os.freemem returns the amount of free system memory
var freeMemory = os.freemem();

// os.type returns the operating system name
var Type = os.type();

// os.arch returns the operating systems CPU architecture
var Arch = os.arch();

// returns the total memory
console.log("Total Memory: " + totalMemory);

// returns the free memory
console.log("Free Memory: " + freeMemory);

// returns the operating system name. It returns 'Linux' for Linux, 'Darwin' for macOS, or 'Windows_NT' for Windows
console.log("Type: " + Type);

// returns the operating system CPU architecture. Possible values can include 'arm', and 'arm64'
console.log("Architecture: " + Arch);
