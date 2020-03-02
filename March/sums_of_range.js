// Try using REST notation but it isnt really needed

function range(start, end, step) {
    total = [];

    while(start <= end) {
        total = total.concat(start);
        start+= step;
    }

    return total;
}

function sum( array ) {
    let sum = 0;
    for(const number in array) {
        sum += array[number];
    }

    return sum;
}

console.log(sum(range(1,10,2)));