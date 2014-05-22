


var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var iter =0;
var precision = 4;

function getValues(callback, numbers, iter) {

  numbers = (numbers == null)? [] : numbers;

  iter = (iter == null)? 5 : iter;
  
  rl.question("Enter a number: ", function(answer) {
    
    numbers.push(parseInt(answer));
    
    if (iter == 0)
      callback(numbers);
    else
      getValues(callback, numbers, iter - 1)
    
  });
}



getValues(function (numbers) {
  console.log("Got 10 numbers");
  console.log(numbers);
  console.log("Average of numbers is"+calcMean(numbers));
  console.log("Variance is"+calcVariance(numbers));
  console.log("Standard Deviation is"+calcStdDev(numbers));

});


function calcMean(numbers) {
i= numbers.length;
var sum = 0;
while(i--)
{
sum += numbers[i];
}
return (sum/numbers.length);
}



function calcVariance(numbers) {
 var mean = calcMean(numbers);
 i= numbers.length;
 var variance = 0;
 while(i--)
 {
  variance += Math.pow((numbers[i]-mean),2)
 }
  variance /= numbers.length;
  return variance;

}

function calcStdDev(numbers) {
var stdDev = Math.sqrt(calcVariance(numbers));
return stdDev;
}







