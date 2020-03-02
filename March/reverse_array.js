function reverseMakeNew(array) {
    let newArray = [];

    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }

    return newArray;
}

function reverseInPlace(array) {
    let arraySize = array.length-1;

    for( let i = 0; i < arraySize/2; i++) {
        let temp = array[i];
        array[i] = array[arraySize - i];
        array[arraySize - i] = temp;
    }
}

var test1 = [1, 2, 3, 4, 5, 6];

// reverseInPlace(test1);
// test1 = reverseMakeNew(test1);

console.log(test1);