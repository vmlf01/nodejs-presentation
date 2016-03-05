// require express module
var express = require('express');

// create a new express 'application'
var app = express();

// add middleware to the pipeline
app.use(function (req, res, next) {
    console.log('Incoming request for ' + req.url);
    next();
});

// add route handlers
app.get('/isprime/:number', handleIsPrime);
app.get('/count/:number', handlePrimeCount);

// export the express app
module.exports = app;

// require our primes module
var primes = require('./primes');

function handleIsPrime(req, res) {
    var number = Number(req.params.number);

    if (isNaN(number)) {
        res.status(400).end();
    }
    else {
        res.status(200).send({ result: primes.isPrime(number) });
    }
}

function handlePrimeCount(req, res) {
    var number = Number(req.params.number);

    if (isNaN(number)) {
        res.status(400).end();
    }
    else {
        res.status(200).send({ result: primes.countPrimes(number) });
    }
}