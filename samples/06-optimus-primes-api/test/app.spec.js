var request = require('supertest');

var app = require('../src/app');

describe('primes api', function () {

	describe('/isprime', function () {
        it('should return 200 if request is valid', function (done) {
            request(app).get('/isprime/10')
                .expect(200, done);
        });

        it('should return 400 if request is invalid', function (done) {
            request(app).get('/isprime/10a')
                .expect(400, done);
        });

        it('should return result object in body', function (done) {
            request(app).get('/isprime/13')
                .expect(200, { result: true }, done);
        });
	});

	describe('/count', function () {
		it('should return 200 if request is valid', function (done) {
            request(app).get('/count/13')
                .expect(200, done);
        });

		it('should return 400 if request is invalid', function (done) {
            request(app).get('/count/bb')
                .expect(400, done);
        });

		it('should return result object in body', function (done) {
            request(app).get('/count/13')
                .expect(200, { result: 6 }, done);
        });

	});
});