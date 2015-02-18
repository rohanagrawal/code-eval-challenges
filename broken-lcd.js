//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {

        // console.log(line);
        
        var numSegments = {
            '0' : [1, 1, 1, 1, 1, 1, 0],
            '1' : [0, 1, 1, 0, 0, 0, 0],
            '2' : [1, 1, 0, 1, 1, 0, 1],
            '3' : [1, 1, 1, 1, 0, 0, 1],
            '4' : [0, 1, 1, 0, 0, 1, 1],
            '5' : [1, 0, 1, 1, 0, 1, 1],
            '6' : [1, 0, 1, 1, 1, 1, 1],
            '7' : [1, 1, 1, 0, 0, 0, 0],
            '8' : [1, 1, 1, 1, 1, 1, 1],
            '9' : [1, 1, 1, 1, 0, 1, 1]
        };
        
        var inputs = line.split(';');
        var displayNum = inputs[1].split('');
        var screenSpots = inputs[0].split(' ');
        for (var i=0; i < screenSpots.length; i++) {
            screenSpots[i] = screenSpots[i].split('');
            for (var n=0; n < screenSpots[i].length; n++) {
                screenSpots[i][n] = parseInt(screenSpots[i][n]);
            }
        }

        var segmentsRequired = [];

        
        for (var a=0; a < displayNum.length; a++) {
            var currentSegments = [];
            if (displayNum[a] !== '.') {
                for (var b=0; b < numSegments[displayNum[a]].length; b++) {
                    currentSegments.push(numSegments[displayNum[a]][b]);
                }
                if (displayNum[a+1] === '.') {
                    currentSegments.push(1);
                } else {
                    currentSegments.push(0);
                }
                segmentsRequired.push(currentSegments);
            }
        }

        var arrayMatch = function(arrA, arrB) {
            for (var x=0; x < 8; x++) {
                if (arrA[x] === 1) {
                    if (arrB[x] === 0) {
                        return false;
                    }
                }
            }
            return true;
        };

        var spotsToCheck = screenSpots.length - segmentsRequired.length + 1;
        var functionalityLED;

        for (var y=0; y < spotsToCheck; y++) {
            functionalityLED = 1;
            for (var z=0; z < segmentsRequired.length; z++) {
                if (!arrayMatch(segmentsRequired[z], screenSpots[y+z])) {
                    functionalityLED = 0;
                }
            }
            if (functionalityLED === 1) break;
        }

        // console.log(screenSpots);
        // console.log('----break----');
        // console.log(segmentsRequired);
        // console.log('----end----');

        console.log(functionalityLED);

        
        
        
    }
});