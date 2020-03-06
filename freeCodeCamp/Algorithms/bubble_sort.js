/*
    Write a function bubbleSort which takes an array of integers 
    as input and returns an array of these integers in sorted order 
    from least to greatest.
*/

// BUBBLE SHORT

function bubbleSort(array) {
    let swap = true;
    while(swap) {
        swap = false;
        for( let i = 0; i < array.length-1; i++ ) {
            if( array[i] > array[i+1] ) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swap = true;
            }
        }
    }

    return array;
}
  
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  