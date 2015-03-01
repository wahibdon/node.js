var http = require("http");
var i = 0;
function onRequest(request, response) {
  console.log("Request received."+i);
  i++;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(80);

console.log("Server has started.");