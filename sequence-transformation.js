//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var strArr = line.split(' ');
        var binaries = strArr[0].split('');
        for (var i=0; i < binaries.length; i++) {
            binaries[i] = parseInt(binaries[i]);
        }
        var str = strArr[1].split('');
        var bin = 0;
        var toggle = str[0];
        var possible = true;
        for (var n=0; n < str.length; n++) {
            if (str[n] !== toggle) {
                toggle = str[n];
                bin++;
            }
            if (!binaries[bin]) {
                if (toggle === 'B') {
                    possible = false;
                    break;
                }
            }
        }
        console.log(line);
        possible ? console.log('Yes') : console.log('No');
    }
});