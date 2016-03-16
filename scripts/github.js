// Create a JSONP wrapper
function executeYQL(yql, callbackFuncName) {
	var url = "http://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(yql) + "&env=store://datatables.org/alltableswithkeys&format=json&callback="+callbackFuncName;
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	head.appendChild(script);
}

// Execute the query
executeYQL("select repository from github.user.repos where id='drgath' | reverse()", "daCallback");

// Define the callback
function daCallback(data) {
	var repositories = data.query.results.repositories;
	var html = [];
	
	for(i in repositories) { 
		var repo = repositories[i].repository;
		html.push("<li><a href='" + repo.url + "'>" + repo.name + "</a> - " + repo.description + "</li>");
	}
	
	document.getElementById("repositories").innerHTML = html.join('');
}
