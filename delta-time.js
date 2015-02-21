//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var times = line.split(' ');
        var time1 = times[0].split(':'), time2 = times[1].split(':');
        var seconds1 = parseInt(time1[2]) + parseInt(time1[1])*60 + parseInt(time1[0])*3600;
        var seconds2 = parseInt(time2[2]) + parseInt(time2[1])*60 + parseInt(time2[0])*3600;
        var diff = Math.abs(seconds1 - seconds2);
        var hr = Math.floor(diff/3600);
        var remaining = diff % 3600;
        var min = Math.floor(remaining/60);
        var sec = remaining % 60;
        var hrStr, minStr, secStr;
        hr < 10 ? hrStr = "0" + hr.toString() : hrStr = hr.toString();
        min < 10 ? minStr = "0" + min.toString() : minStr = min.toString();
        sec < 10 ? secStr = "0" + sec.toString() : secStr = sec.toString();
        var result = [hrStr, minStr, secStr];
        console.log(result.join(':'));
    }
});