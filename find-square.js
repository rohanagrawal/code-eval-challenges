//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var coordinates = line.split(', ');
        for (var i=0; i < coordinates.length; i++) {
            coordinates[i] = coordinates[i].slice(1,4);
            coordinates[i] = coordinates[i].split(',');
        }
        var isSquare = function(coords) {
            var checkX = false, checkY = false;
            var xPairs, yPairs = [];
            for (var n=1; n < coords.length; n++) {
                if (coords[0][0] === coords[n][0]) {
                    checkX = !checkX;
                    xPairs.push(coords[0], coords[n]);
                }
                if (coords[0][1] === coords[n][1]) {
                    checkX = !checkY;
                    yPairs.push(coords[0], coords[n]);
                }
            }
            if (!checkX || !checkY) return false;
        };
    }
});