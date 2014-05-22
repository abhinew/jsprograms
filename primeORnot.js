var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var i=2;

  
  rl.question("Enter a number: ", function(answer) {
 
    while(i<answer)
    {
	if(answer%i === 0)
	{
	 console.log(answer+"is a not a prime number");
	 break;
     	}
             else
	  i++;
    }
    if (i==answer)
    console.log(answer+"is a prime number");
   if (i > answer)
    console.log(answer+"is neither prime nor composite");
});
    

