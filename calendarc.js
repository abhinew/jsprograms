function ask(question,callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + ": ");
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
   callback(data);
   
 });
}

ask("Month", function(month) {
  ask("Year", function(year) {
    displayCalendar(month,year);
    process.exit();
  });
});

function displayCalendar(month,year)
{
  var mon = month.slice(0,3);
  dayNames = ["Su","Mo","Tu","We","Th","Fr","Sa"];
  var monthNumber = ["january", "february", "march","april","may","june","july","august","september","october","november","december"].indexOf  (month.toLowerCase());
  console.log("Calendar: ")
  console.log(mon,year); 
  console.log(dayNames.join(' '));
  var date = new Date(year,monthNumber,1);
  var d = date.getDay();
  var nod = getNoOfDaysinMonth(monthNumber);
  pad_array(d,nod);
}

function getNoOfDaysinMonth(monthNo)
{ 
  var noOfDays;
  if (monthNo%2 == 0)
    noOfDays = 31;
  else if (monthNo === 1)
    noOfDays = 29;
  else 
    noOfDays = 30;
  return noOfDays;   
}

function pad_array(d,nod)
{
 var myarray = [];	
 while(d)
 {		
  var space = '  ';
  myarray.push(space);
  d--;
 }
 for (i=1; i<=nod; i++ )
 {
  if (i < 10 )	
   myarray.push(' ',i);
  else  
   myarray.push(i);
 }
 console.log("myarray is"+myarray);
 console.log(myarray.join(' '));
 for(i=0;i<myarray.length;i++)
 {
  console.log("Array element"+myarray[i]);
 }
}

  

