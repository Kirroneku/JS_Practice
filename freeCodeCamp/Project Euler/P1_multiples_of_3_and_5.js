/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {
    let total = 0;
    // going through +5 and +3 is faster than iteration through
    // all numbers and checking them

    for( let i = 5; i < number; i+=5 ) {
        total += i;
    }

    for( let i = 3; i < number; i+=3 ) {
        if( i % 5 != 0 ) {
            total += i;
        }
    }

    return total;
}
  
multiplesOf3and5(1000);
  