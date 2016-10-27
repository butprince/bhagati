var http = require("http");
http.createServer(function(request, response) {

	response.writeHead(200, {"content-type":"text/plain"});
	response.end("Thank you Bangalore. Hello Hyderabad!!!");
}).listen(8081);

console.log("server is running at port 8081");