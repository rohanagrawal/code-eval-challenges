//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var dollarNum = parseInt(line);
        
        var numToWord = {
            0 : 'Zero',
            1 : 'One',
            2 : 'Two',
            3 : 'Three',
            4 : 'Four',
            5 : 'Five',
            6 : 'Six',
            7 : 'Seven',
            8 : 'Eight',
            9 : 'Nine',
            10 : 'Ten',
            11 : 'Eleven',
            12 : 'Twelve',
            13 : 'Thirteen',
            14 : 'Fourteen',
            15 : 'Fifteen',
            16 : 'Sixteen',
            17 : 'Seventeen',
            18 : 'Eighteen',
            19 : 'Nineteen',
            20 : 'Twenty',
            30 : 'Thirty',
            40 : 'Forty',
            50 : 'Fifty',
            60 : 'Sixty',
            70 : 'Seventy',
            80 : 'Eighty',
            90 : 'Ninety'
        };

        var numToPlace = {
            100 : 'Hundred',
            1000 : 'Thousand',
            1000000 : 'Million'
        };

        var convertNum = function(num) {
            var dollarStr = '';
            var place, numInPlace, numRemaining, strRemaining;

            if (numToWord[num]) {
                dollarStr = numToWord[num];
            } else if (num < 100) {
                numInPlace = Math.floor(num/10);
                numRemaining = num % 10;
                dollarStr = numToWord[numInPlace*10] + convertNum(numRemaining);
            } else {
                if (num < 1000) {
                    place = 100;
                } else if (num < 1000000) {
                    place = 1000;
                } else if (num < 1000000000) {
                    place = 1000000;
                }
                numInPlace = Math.floor(num/place);
                numRemaining = num % place;
                dollarStr = convertNum(numInPlace) + numToPlace[place];
                strRemaining = convertNum(numRemaining);
                if (strRemaining !== 'Zero') {
                    dollarStr += strRemaining;
                }
            }
            return dollarStr;
        }

        console.log(convertNum(dollarNum) + 'Dollars');
        
    }
});