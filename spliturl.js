var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the URL: ", function(answer) {
 //var url = new String(answer);
 url = answer;
 console.log(typeof(url));
 //console.log(str.contains("hi");
 console.log("Protocol name: "+getProtocol(url));
 if (url.indexOf("@") !== -1)
	{
		console.log("Username is: "+getUsername(url));
		console.log("Password is: "+getPassword(url));
		console.log("Domain is: "+getDomain(url));
	}
 else
   {
	   console.log("Hostname is: "+getHostname(url));
	   console.log("Domain is: "+getDomainname(url));
   }
 console.log("Resourcepath is: "+getResourcepath(url));
 console.log("Querystring is: "+getQuerystring(url));
 console.log("Fragment is: "+getFragment(url));    
});

function getProtocol(url)
{
  symbol = ":";
  endIndex = getIndex(url,symbol);
  protocol = url.slice(0,endIndex);
  return protocol;
}

function getIndex(url,symbol)
{
  index = url.indexOf(symbol);
  return index;
}

function getUsername(url)
{
  symbol = ":";
  firstOccur = getIndex(url,symbol);
  secondOccur = getIndexFrom(url,symbol,firstOccur+1);
  //console.log("sec occur",secondOccur);
  if (secondOccur === -1)
    return null;
  else 
    username = url.slice(firstOccur+3,secondOccur);
    return username;
}

function getPassword(url)
{
  symbol = "@"
  endIndex = getIndex(url,symbol);
  password = url.slice(secondOccur+1,endIndex);
  return password;
}

function getDomain(url)
{
  symbol = "@";
  beginIndex = getIndex(url,symbol)+1;
  symbol = "/";
  endIndex = getIndexFrom(url,symbol,beginIndex);
  domain = url.slice(beginIndex,endIndex);
  return  domain;
}

function getIndexFrom(url,symbol,fromIndex)
{
  i = url.indexOf(symbol,fromIndex);
  return i;
}

function getResourcepath(url)
{
  symbol = "/";
  firstOccur = getIndex(url,symbol);
  secondOccur = getIndexFrom(url,symbol,firstOccur+1);
  thirdOccur = getIndexFrom(url,symbol,secondOccur+1);
  if (thirdOccur === -1)
    return null
  else 
  {
	symbol = "?";
    endIndex = getIndex(url,symbol);
    path = url.slice(thirdOccur+1,endIndex);
    return path; 
  }
}


function getQuerystring(url)
{
  symbol = "?";
  beginIndex = getIndex(url,symbol);
  if (beginIndex === -1)
    return null
  else 
  {
	symbol = "#";
	endIndex = getIndex(url,symbol);
	query = url.slice(beginIndex+1,endIndex);
	return query;  
  }
	
}


function getFragment(url)
{
  symbol = "#";
  beginIndex = getIndex(url,symbol);
  if (beginIndex === -1)
    return null
  else 
  {
	endIndex = url.length;
	fragment = url.slice(beginIndex+1,endIndex);
	return fragment;  
  }
	

}




























