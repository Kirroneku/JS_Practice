/*
    Write a function selectionSort which takes an array of integers as input and
    returns an array of these integers in sorted order from least to greatest.
*/


function selectionSort(array) {
    for( let i = 0; i < array.length; i++ ){
        let swap = i;
        for( let j = i+1; j < array.length; j ++ ) {
            if(array[j] < array[swap]) {
                swap = j;
            }
        }

        let temp = array[swap];
        array[swap] = array[i];
        array[i] = temp;
        
    }
    
    return array;
}
  
  
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  