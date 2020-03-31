/*
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
    let max = '';
    while(n > 0 ) {
        max += '9';
        n--;
    }
    // console.log(max)
    let largest = 0;

    for(let i = max; i > 0; i--) {
        for( let j = max; j > 0; j-- ) {
            let curNum = j * i;
            if( isPalindrome(curNum) ) {
                largest = Math.max(curNum, largest);
            }
        }
    }

    return largest;
}

function isPalindrome(n) {
    let reverse = 0;
    let breakDown = n;
    while(breakDown > 0) {
        reverse *= 10;
        reverse += breakDown % 10;
        breakDown = Math.floor(breakDown/10);
    }

    return reverse == n;
}
  
console.log(largestPalindromeProduct(3));
  