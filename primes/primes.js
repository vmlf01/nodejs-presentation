function isPrime(number)
{
    // only numbers larger then one are prime
    if (number < 2)
        return 0;

    // 2 and 3 are prime
    if (number == 2 || number == 3)
        return 1;

    // even number are not prime
    if (number % 2 == 0)
        return 0;

    // check division by other odd numbers
    var i;
    for (i = 3; i <= Math.sqrt(number); i = i + 2)
    {
        if (number % i == 0)
            return 0;
    }

    // all checks passes, number is prime
    return 1;
}


var maxValue = Math.pow(10, 7);
var count = 0;

var begin, end;
var time_spent;

begin = new Date().getTime();

var i;
for (i = 1; i <= maxValue; i++)
{
    if (isPrime(i))
    {
        count++;
    }
}

end = new Date().getTime();
time_spent = end - begin;

console.log("There are %d primes up to %d.", count, maxValue); // eslint-disable-line
console.log("Took %d milliseconds.", time_spent); // eslint-disable-line
