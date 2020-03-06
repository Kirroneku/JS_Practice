/*
    Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
    While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
*/

// Gunna do pivot in the middle ( Assuming data is normal distro )

function quickSort(array) {
    quickSortHelper(array, 0, array.length-1);
    return array;
}

function quickSortHelper(array, start, end) {
    if( start < end ) {
        // Parition the part we are on and get 
        // the index of where the partition ends up on
        let part = partition(array, start, end);

        // partition will be in correct place so we execute on rest...
        quickSortHelper(array, part + 1, end );
        quickSortHelper(array, start, part - 1);
    }

    return array;
    
}


function partition(arr, start, end){
    // Take pivot as last element...
    let pivotValue = arr[end];

    // get where we wanna swap
    let left = start;

    // Loop through and start swapping 
    for( let i = start; i < end; i++ ) {
        // If its smaller than the pivot we swap and move the 
        // index we wanna swap ( Will be swapped back if it's smaller later)
        if( arr[i] < pivotValue ) {
            let temp = arr[left];
            arr[left] = arr[i];
            arr[i] = temp;
            left ++;
        }
    }

    // swap the pivot to the last spot to really be the pivot
    // else it will stay at the end
    let temp = arr[left];
    arr[left] = arr[end];
    arr[end] = temp;

    // Return the pivot's position that we just swapped it to.
    return left;
}


// test array:
// console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
  