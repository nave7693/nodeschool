var BufferList = require('bl');
var http = require('http');

var bl = new BufferList();

http.get(process.argv[2], function (res) {
    res.on("data", function (data) {
        bl.append(data);
    });
    res.on("end", function () {
        console.log(bl.length);
        console.log(bl.toString());
    });
});