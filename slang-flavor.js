//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var strArr = line.split('');
        var puncNum = 0;
        var iterator = 0;
        var phrases = [
            ', yeah!',
            ', this is crazy, I tell ya.',
            ', can U believe this?',
            ', eh?',
            ', aw yea.',
            ', yo.',
            '? No way!',
            '. Awesome!'
        ];
        for (var i=0; i < strArr.length; i++) {
            if ((/[.,!?]/).test(strArr[i])) {
                // console.log(strArr[i]);
                puncNum++;
                if ((puncNum % 2 === 0) && ((/[.!?]/).test(strArr[i]))) {
                    strArr.splice(i, 1, phrases[iterator]);
                    iterator < 7 ? iterator++ : iterator = 0;
                }
            }
        }
        console.log(strArr.join(''));
    }
});