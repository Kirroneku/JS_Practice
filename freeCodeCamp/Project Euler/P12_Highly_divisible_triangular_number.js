function divisibleTriangleNumber(n) {
    if( n == 1 ) {
        return 1;
    }

    let tri = 2;
    let number = 3;

    while( true ) {
        let sqrtofNum = Math.ceil(Math.sqrt(number))
        let totalFactors = 0;
        for( let i = 1; i < sqrtofNum; i++ ) {
            if( number % i == 0 ) {
                totalFactors += 2;
            }
        }

        if( totalFactors >= n ) {
            return number;
        }

        tri++;
        number += tri;
    }
}
  
divisibleTriangleNumber(500);
  