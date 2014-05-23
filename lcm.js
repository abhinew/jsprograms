


var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var iter =0;

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
  console.log("Got 5 numbers");
  console.log(numbers);
  console.log("LCM of these numbers is"+mmc(numbers));
  
})

mmc = function(o){
    for(var i, j, n, d, r = 1; (n = o.pop()) != undefined;)
        while(n > 1){
            if(n % 2){
                for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2);
                d = i <= j ? i : n;
            }
            else
                d = 2;
            for(n /= d, r *= d, i = o.length; i; !(o[--i] % d) && (o[i] /= d) == 1 && o.splice(i, 1));
        }
    return r;
};