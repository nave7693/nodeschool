var http = require('http');
var fs = require('fs');
var url = require('url');
var map = require('through2-map');

function parseTime(timestr, obj) {
    //console.log(timestr);
    var date = new Date(timestr);
    obj.hour = date.getHours();    
    obj.minute = date.getMinutes();    
    obj.second = date.getSeconds();    
}

function unixTime(timestr, obj) {
    var date = new Date(timestr);
    obj.unixtime = date.getTime();
}

var server = http.createServer(function (request, response) {
    // forgot this...
    if (request.method != 'GET')
        return response.end(request.method + 'encountered. Send a GETT\n');
    
    var parsedURL = url.parse(request.url, true);
    //console.log(parsedURL);
    var result = {};
    if (parsedURL.pathname === '/api/parsetime') {
        parseTime(parsedURL.query.iso, result);
    }
    if (parsedURL.pathname === '/api/unixtime') {
        unixTime(parsedURL.query.iso, result);
    }
    response.writeHead(200, { 'Content-Type' : 'application/json' });
    response.end(JSON.stringify(result));
});

server.listen(process.argv[2]);