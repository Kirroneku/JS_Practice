/*
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

    What is the nth prime number?
*/

function nthPrime(n) {
    let currentNum = 2;
    n--;

    while ( n > 0 ) {
        // Find primes
        currentNum++;

        let isPrime = true;
        let term = Math.sqrt(currentNum);
        for(let i = 2; i <= term; i++) {
            if( currentNum % i == 0 ) {
                isPrime = false;
                break;
            }
        }

        if( isPrime ) {
            n--;
        }
    }
    
    return currentNum;
}

console.log(nthPrime(10001));
