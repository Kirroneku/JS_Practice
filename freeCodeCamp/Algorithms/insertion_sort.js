/*
    Write a function insertionSort which takes an array of integers as 
    input and returns an array of these integers in sorted order from least to greatest.
*/

function insertionSort(array) {
    for( let i = 0; i < array.length; i++ ) {
        let insert = array[i];
        for( let j = 0; j < i; j++ ) {
            if( array[j] > insert ) {
                while( j <= i ) {
                    let temp = array[j];
                    array[j] = insert;
                    j++;
                    insert = temp;
                }
            }
        }
    }

    return array;
}
  
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));