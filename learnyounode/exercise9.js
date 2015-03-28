var BufferList = require('bl');
var http = require('http');

var numDone = 0;
var responses = [];

function sendGetRequest(index, URL)
{
    http.get(URL, function (res) {
        res.on("data", function (data) {
            //console.log(index);
            responses[index].append(data);
        });
        res.on("end", function () {
            numDone++;
            if (numDone == 3) {
                responses.forEach(function (buffer) {
                    console.log(buffer.toString());
                });
            }
        });
    });
}

var i;
for (i = 0; i < 3; i++) {
    responses.push(new BufferList());
    sendGetRequest(i, process.argv[i+2]);
}

