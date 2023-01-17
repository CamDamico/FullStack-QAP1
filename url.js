// The url Module provides utilities for URL resolution and parsing

const url = require("url");

// Setting the url variable adr (Address)
var adr = "http://localhost:8080/default.htm?year=2017&month=february";

// url.parse will parse the url (adr)
var q = url.parse(adr, true);

//returns an object: { year: 2017, month: 'february' }
var qdata = q.query;

//returns 'localhost:8080'
console.log(q.host);

//returns '/default.htm'
console.log(q.pathname);

//returns '?year=2017&month=february'
console.log(q.search);

//returns '2017'
console.log(qdata.year);
