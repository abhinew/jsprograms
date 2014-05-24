

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var iter =0;

function getValues(callback, numbers, iter) {

  numbers = (numbers == null)? [] : numbers;

  iter = (iter == null)? 1 : iter;
  
  rl.question("Enter a number: ", function(answer) {
    
    numbers.push(parseInt(answer));
    
    if (iter == 0)
    {
      callback(numbers);
      rl.close();
    }
    else
      getValues(callback, numbers, iter - 1)
    
  });
}



getValues(function (numbers) {
  console.log("Got two numbers");
  console.log(numbers);
  console.log("HCF of these numbers is"+findHCF(numbers));
  
})

function findHCF(numbers) {
   
  a = numbers.pop();
  b = numbers.pop();

  while(a != b)
  {
	if (a > b)
	  return findHCF([a-b, b]);
	else 
	  return findHCF([a, b-a]);
  }
  return a;
}