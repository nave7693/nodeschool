var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, function (err, data) {
    var content = data.toString();
    var result = content.split('\n').length - 1;
    console.log(result);
});