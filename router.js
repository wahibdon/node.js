function route(handle, pathname){
	console.log("about to route a request for "+pathname);
	if (typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else{
		console.log("No request handler found for "+pathname);
		response.writeHead(404, {"Content-Type" : "plain/text"});
		response.write("404 Not Found");
		response.end();
	}
}
exports.route = route;