

rl.question("Enter the number", function(answer) {
  
  console.log("Average of the numbers is:", answer);

  rl.close();
});




var numArray = [1,2,3,4,5];
var sum;
sum=0;
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function calcAvg(){
	for(i=0;i<numArray.length;i++) 
	{
		sum+=numArray[i];
	}
	
	return(sum/numArray.length)
}

function calcMax(){
	
	return Math.max.apply(numArray);
}

function calcMin(){
	return Math.min.apply(numArray);
}

console.log("avg:"+calcAvg());
console.log("max:"+calcMax());
console.log("min:"+calcMin());