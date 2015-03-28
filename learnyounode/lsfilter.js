var fs = require('fs');
var path = require('path');

module.exports = function lsfilter(dir, extwanted, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);
        var i;
        var result = [];
        for (i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === '.' + extwanted) {
                result.push(list[i]);
            }
        }
        callback(null, result);
    });
};