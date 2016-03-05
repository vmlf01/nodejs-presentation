function isPrime(N) {
    if (N < 2) {
        return false;
    }
    else {
        // simple algorithm, no optimization
        for (var i = 2; i < N; i++) {
            if (N % i === 0) {
                return false;
            }
        }

        return true;
    }
}

function countPrimes(N) {
    if (N < 2) {
        return 0;
    }
    else {
        var count = 0;

        for (var i = 1; i <= N; i++) {
            if (isPrime(i)) {
                count++;
            }
        }

        return count;
    }
}

module.exports = {
    isPrime: isPrime,
    countPrimes: countPrimes
}
