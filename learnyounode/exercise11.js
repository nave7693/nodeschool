var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var readStream = fs.createReadStream(process.argv[3]);
    readStream.pipe(response);
});

server.listen(process.argv[2]);