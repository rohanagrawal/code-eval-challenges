//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var strArr = line.split(';');
        var purchasePrice = parseInt(strArr[0]), cashGiven = parseInt(strArr[1]);
        var change = cashGiven - purchasePrice;
        var changeValues = [];
        var denominations = {
          'PENNY' : .01,
          'NICKEL' : .05,
          'DIME' : .10,
          'QUARTER' : .25,
          'HALF DOLLAR' : .50,
          'ONE' : 1.00,
          'TWO' : 2.00,
          'FIVE' : 5.00,
          'TEN' : 10.00,
          'TWENTY' : 20.00,
          'FIFTY' : 50.00,
          'ONE HUNDRED' : 100.00
        };

        if (cashGiven < purchasePrice) {
          console.log('ERROR');
        } else if (cashGiven === purchasePrice) {
          console.log('ZERO');
        } else {

        }
    }
});