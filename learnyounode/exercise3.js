var fs = require('fs');

var filename = process.argv[2];

var content = fs.readFileSync(filename).toString();

var result = content.split('\n').length - 1;

console.log(result);