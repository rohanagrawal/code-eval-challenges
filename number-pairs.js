//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var strArr = line.split(';');
        var nums = strArr[0].split(',');
        var target = parseInt(strArr[1]);
        for (var i=0; i < nums.length; i++) {
            nums[i] = parseInt(nums[i]);
        }
        var results = [];
        for (var a=0; a < nums.length-1; a++) {
          for (var b=a+1; b < nums.length; b++) {
            if (nums[a] + nums[b] === target) {
              results.push([nums[a].toString(), nums[b].toString()]);
            }
          }
        }
        var resultStr = '';
        if (results.length) {
          for (var n=0; n < results.length; n++) {
            resultStr += results[n].join(',');
            if (n < results.length-1) resultStr += ';';
          }
          console.log(resultStr);
        } else {
          console.log('NULL');
        }
    }
});