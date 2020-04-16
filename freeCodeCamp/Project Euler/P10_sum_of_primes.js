function primeSummation(n) {
    let total = 0


    for( let i = 2; i < n; i++ ) {
        let curLimit = Math.sqrt(i);
        let prime = true

        for( let factor = 2; factor <= curLimit; factor++){
            if( i%factor == 0 ) {
                prime = false
                break
            }
        }

        if( prime == true ) {
            // console.log(i)
            total += i
        }
    }
    
    return total;
}

// console.log(primeSummation(2001))

  