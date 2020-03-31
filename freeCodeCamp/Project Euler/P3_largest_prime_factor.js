/*
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
    // it is a factor of itself
    if( isPrime(number) ){
        return number;
    }

    let factors = findFactors(number);

    for( let i = factors.length-1; i >= 0; i-- ) {
        if( isPrime(factors[i]) ) {
            return factors[i];
        }
    }
    
    return 1;
}

function isPrime( number ) {
    if( number == 2 ) {
        return true;
    }
    let term = Math.sqrt(number);

    for(let i = 2; i < term; i++ ) {
        if( number%i == 0 ) {
            return false;
        }
    }

    return true;
}

function findFactors(number) {
    let term = Math.sqrt(number);
    let factors = [];

    for( let i = 2; i < term ; i++) {
        if( number % i == 0 ) {
            factors.push(i);
        } 
    }

    return factors;
}

largestPrimeFactor(13195);
