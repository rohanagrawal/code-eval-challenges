//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(line);
        var Stack = function() {
            this.storage = {};
            this.stackSize = 0;
        };
        
        Stack.prototype.push = function(value) {
            this.storage[this.stackSize] = value;
            this.stackSize++;
        };
        
        Stack.prototype.pop = function(){
            if (this.stackSize > 0){
                this.stackSize--;
            }
            var result = this.storage[this.stackSize];
            delete this.storage[this.stackSize];
            return result;
        };
        var parens = new Stack();
        var chars = line.split('');
        var isValid = true;
        for (var i=0; i < chars.length; i++) {
            if (chars[i] === '{' || chars[i] === '(' || chars[i] === '[') {
                parens.push(chars[i]);
            }
            if (chars[i] === '}') {
                if (parens.storage[parens.stackSize] === '{') {
                    parens.pop();
                } else {
                    isValid = false;
                    break;
                }
            }
            if (chars[i] === ')') {
                if (parens.storage[parens.stackSize] === '(') {
                    parens.pop();
                } else {
                    isValid = false;
                    break;
                }
            }
            if (chars[i] === ']') {
                if (parens.storage[parens.stackSize] === '[') {
                    parens.pop();
                } else {
                    isValid = false;
                    break;
                }
            }
        }
        isValid ? console.log('True') : console.log('False');
    }
});