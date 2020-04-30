function largeSum(arr) {
    // Good luck!
    let total = 0;
    
    for( let number of arr ) {
        total += parseInt(number);
    }

    total = total.toString();

    total = total.substring(0, 1) + total.substring(2, 11);

    return total;
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));
