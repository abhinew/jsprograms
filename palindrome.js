var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var str = new String();
var reverseStr = [];
//var str,reverseStr;
var flag = 1;

 rl.question("Enter the string: ", function(answer) {
    str = answer;
    for(i=str.length-1;i>=0;i--)
    {
    lastChar=str.charAt(i);
    reverseStr.push(lastChar);
    }
      for(i=0;i<str.length;i++)
      {
         if(reverseStr[i] != str[i])
	flag = 0;
       }
      if(flag == 0)
       console.log("not a palindrome"); 
      else
       console.log("is a palindrome"); 
    
});


    


