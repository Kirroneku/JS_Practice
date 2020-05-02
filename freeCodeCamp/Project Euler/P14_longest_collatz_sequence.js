function longestCollatzSequence(limit) {
    let max = limit/2;
    if( limit % 2 == 0 ) {
        limit--;
    }

    let maxTotal = {'max': 0, 'best': 0};
    console.log(max)
    for( ; limit > max; limit-= 2) {
        let currentTotal = 1;
        let curLimit = limit;
        while( curLimit != 1 ) {
            if( curLimit % 2 == 0 ) {
                curLimit /= 2;
            } else {
                curLimit = curLimit*3 + 1;
            }
            

            currentTotal++;
        }
        console.log(limit, currentTotal)
        if( currentTotal > maxTotal['max'] ) {
            maxTotal['max'] = currentTotal;
            maxTotal['best'] = limit;
        }
    }


    return maxTotal['best'];
}

console.log(longestCollatzSequence(14));
