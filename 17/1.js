// Your code here.
var authorInfo = function(acceptType){
  	var req = new XMLHttpRequest();
	req.open("GET", "/author", true);
	req.setRequestHeader("accept", acceptType);
	req.addEventListener("load", function() {
      	console.log(acceptType + ":");
  		console.log(req.responseText);
	});
	req.send(null);
}

authorInfo("text/plain");
authorInfo("text/html");
authorInfo("application/json");
authorInfo("application/rainbows+unicorns");

