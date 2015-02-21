//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var num = parseInt(line);
        if (num > 0) {
            var log = Math.log(num)/Math.log(2);
            var iterations = Math.ceil(log);
            var sequence = '0';
            var seqAdd = '';
            if (iterations < 20) {
                for (var i=0; i < iterations; i++) {
                    for (var n=0; n < sequence.length; n++) {
                        if (sequence[n] === '0') {
                            seqAdd += '1';
                        } else if (sequence[n] === '1') {
                            seqAdd += '2';
                        } else if (sequence[n] === '2') {
                            seqAdd += '0';
                        }
                    }
                    sequence += seqAdd;
                    seqAdd = '';
                }
            }
            // console.log('=== ' + line + ' ===');
            console.log(line, sequence);
        } else {
            console.log(line, 0);
        }
    }
});