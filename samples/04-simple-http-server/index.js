// require node 'http' core module
var http = require('http');

// read port from environment variable 'PORT' or use '3000' as default
var port = process.env.PORT || 3000;

// create an http server and set the request handler
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ msg: 'Hello', requestPath: req.url }));
    res.end();
});

// start up server on all IP interfaces on specified port
server.listen(port, '0.0.0.0', function () {
    console.log('App server is running on http://0.0.0.0:' + port);
});