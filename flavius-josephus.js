//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var LinkedList = function(){
        var list = {};
        list.head = null;
        list.tail = null;

        list.addToTail = function(value){
          if (!this.head && !this.tail){
            this.tail = this.head = makeNode(value);
          }
          else if (this.tail){
            this.tail = this.tail.next = makeNode(value);
          }

        };

        list.removeHead = function(){
          if(this.head){
            var res = this.head.value;
            this.head = this.head.next;
            return res;
          }
        };

        list.contains = function(target){
          for (var node = this.head;  node !== null; node = node.next){
            if (node.value === target) return true;
          }
          return false;
        };

        return list;
      };

      var makeNode = function(value){
        var node = {};

        node.value = value;
        node.next = null;
       
        return node;
      };

      var strArr = line.split(',');
      var jumpNum = parseInt(strArr[1]);
      var flaviusArr = [];
      for (var i=0; i < parseInt(strArr[0]).length; i++) {
        flaviusArr.push(i);
      }

      var flaviusList = new LinkedList();

      for (var n=0; n < flaviusArr.length; n++) {
        flaviusList.addToTail(flaviusArr[n]);
      }

      console.log(flaviusList);
    }
});