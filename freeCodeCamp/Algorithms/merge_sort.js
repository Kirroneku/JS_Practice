/*
    Write a function mergeSort which takes an array of integers as input and returns an array of these integers 
    in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge,
    which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible 
    for the recursion that produces single-item arrays to feed into merge. Good luck!
*/

function mergeSort(array) {
    if(array.length <= 1) return array;
    // Split
    let middle = Math.floor(array.length/2);
    let array1 = array.slice(0, middle);
    let array2 = array.slice(middle);

    array = mergeHelper(mergeSort(array1), mergeSort(array2));

    return array;
}

function mergeHelper( array1, array2 ) {
    // Then sort after
    let mergedArray = [];
    let j = 0;
    let i = 0
    while(i < array1.length && j < array2.length) {
        if( array1[i] < array2[j] && i < array1.length) {
            mergedArray.push(array1[i]);
            i++;
        } else if (j < array2.length) {
            mergedArray.push(array2[j]);
            j++;
        }
    }

    return mergedArray.concat(array1.slice(i)).concat(array2.slice(j));
    
}
  
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  