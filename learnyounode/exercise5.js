var fs = require('fs');
var path = require('path');
var extwanted = '.' + process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === extwanted) {
            console.log(list[i]);
        }
    }
});