#include <stdio.h>
#include <math.h>
#include <time.h>

int isPrime(int number)
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
    int i;
    for (i = 3; i <= sqrt(number); i = i + 2)
    {
        if (number % i == 0)
            return 0;
    }

    // all checks passes, number is prime
    return 1;
}


int main(void)
{
    int maxValue = pow(10, 7);
    int count = 0;

    clock_t begin, end;
    double time_spent;

    begin = clock();

    int i;
    for (i = 1; i <= maxValue; i++)
    {
        if (isPrime(i))
        {
            count++;
        }
    }

    end = clock();
    time_spent = (double)(end - begin) / CLOCKS_PER_SEC * 1000;

    printf("There are %d primes up to %d.\n", count, maxValue);
    printf("Took %lf milliseconds.\n", time_spent);
    return 0;
}
