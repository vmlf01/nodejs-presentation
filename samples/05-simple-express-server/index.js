// require express module
var express = require('express');

// create a new express 'application'
var app = express();

// add middleware to the pipeline
app.use(function (req, res, next) {
    console.log('Incoming request for ' + req.url);
    next();
});

// add a route handler
app.get('*', function (req, res) {
  res.status(200).send({ msg: 'Hello', requestPath: req.url });
});

// start server listening on port 3000
app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3000');
});
