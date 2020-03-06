/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. 
Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) 
creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. 
We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

function pairwise(arr, arg) {
    let total = 0;
    let usedPair = new Map();
    for(let i = 0 ; i < arr.length; i++ ) {
        if( usedPair.get(i) != undefined ) {
            continue;
        }

        // console.log(usedPair);

        let pair = findpair(i, arr, arg, usedPair);
        if( pair != -1 ) {
            usedPair.set(i, 1);
            usedPair.set(pair-i, 1);
            total += pair;
        }
    }

    // console.log(total);
    return total;
}

function findpair(start, arr, total, canCheck) {
    let startVal = arr[start];
    if( startVal > total || start == arr.length-1) {
        return -1;
    }
    // Get the pair ( If not possible return -1 )... So take the closest one that could be added to get the total

    for( let i = start + 1; i < arr.length; i++ ) {
        if( startVal + arr[i] == total && canCheck.get(i) == undefined) {
            return start + i;
        }
    }

    return -1;
}
  
// pairwise([1,4,2,3,0,5], 7);
// pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2)