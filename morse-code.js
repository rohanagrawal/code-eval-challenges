//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var morse = {
            ".-" : "A",
            "-..." : "B",
            "-.-." : "C",
            "-.." : "D",
            "." : "E",
            "..-." : "F",
            "--." : "G",
            "...." : "H",
            ".." : "I",
            ".---" : "J",
            "-.-" : "K",
            ".-.." : "L",
            "--" : "M",
            "-." : "N",
            "---" : "O",
            ".--." : "P",
            "--.-" : "Q",
            ".-." : "R",
            "..." : "S",
            "-" : "T",
            "..-" : "U",
            "...-" : "V",
            ".--" : "W",
            "-..-" : "X",
            "-.--" : "Y",
            "--.." : "Z",
            ".----" : "1",
            "..---" : "2",
            "...--" : "3",
            "....-" : "4",
            "....." : "5",
            "-...." : "6",
            "--..." : "7",
            "---.." : "8",
            "----." : "9",
            "-----" : "0"
        };
        var words = line.split('  ');
        for (var i=0; i < words.length; i++) {
            var word = words[i].split(' ');
            for (var n=0; n < word.length; n++) {
                word[n] = morse[word[n]];
            }
            word.join(' ');
        }
        console.log(words.join(' '));
    }
});