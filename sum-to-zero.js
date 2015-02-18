//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var nums = line.split(',');
        var counter = 0;
        for (var i=0; i < nums.length; i++) {
            nums[i] = parseInt(nums[i]);
        }
        for (var a=0; a < nums.length-3; a++) {
            for (var b=a+1; b < nums.length-2; b++) {
                for (var c=b+1; c < nums.length-1; c++) {
                    for (var d=c+1; d < nums.length; d++) {
                        if ((nums[a] + nums[b] + nums[c] + nums[d]) === 0) counter++;
                    }
                }
            }
        }
        console.log(counter);
    }
});