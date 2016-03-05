var should = require('should');

var primes = require('../src/primes.js');

describe('primes', function () {

    it('should export a member function isPrime', function () {
        primes.should.have.property('isPrime').which.is.a.Function();
    });

    it('should export a member function countPrimes', function () {
        primes.should.have.property('countPrimes').which.is.a.Function();
    });

    describe('isPrime', function () {

        it('should return false if N is less than 2', function () {
            primes.isPrime(1).should.be.false();
            primes.isPrime(0).should.be.false();
            primes.isPrime(-13).should.be.false();
        });

        it('should return true if N is only divisible by 1 and itself', function () {
            primes.isPrime(2).should.be.true();
            primes.isPrime(3).should.be.true();
            primes.isPrime(7).should.be.true();
            primes.isPrime(997).should.be.true();
        });

        it('should return false if N is not prime', function () {
            primes.isPrime(4).should.be.false();
            primes.isPrime(100).should.be.false();
        });
    });

    describe('countPrimes', function () {

        it('should return 0 if N is less than 2', function () {
            primes.countPrimes(1).should.equal(0);
            primes.countPrimes(0).should.equal(0);
            primes.countPrimes(-15).should.equal(0);
        });

        it('should return number of primes between 1 and N inclusive', function () {
            primes.countPrimes(2).should.equal(1);
            primes.countPrimes(10).should.equal(4);
            primes.countPrimes(10000).should.equal(1229);
        });

    });

});