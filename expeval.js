var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var mathjs = require('mathjs'),
    math = mathjs();

  
  rl.question("Enter the angle theta:", function(answer) {
  var theta = parseInt(answer);
  //console.log(math.eval('sin('+theta+' deg)^2'));
    
 console.log(math.eval('((sin('+theta+' deg)^2) *cos('+theta+' deg)) + ((cos('+theta+' deg)^2) *sin('+theta+' deg))'));

});


