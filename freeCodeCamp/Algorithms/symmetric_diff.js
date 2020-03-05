/* 
    Create a function that takes two or more arrays and returns an array of the symmetric difference 
    (△ or ⊕) of the provided arrays.

    Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term 
    "symmetric difference" of two sets is the set of elements which are in either of the two sets,
    but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take 
    (say on a set D = {2, 3}), you should get the set with elements which are in either of the two 
    the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain 
    only unique values (no duplicates).
*/

function sym(...args) {
    let symDiff = [];
    for( let arg in args ) {
        symDiff = symHelper(symDiff, args[arg]);
    }

    symDiff.sort();
    console.log(symDiff);
    return symDiff;
}
  
function symHelper(array1, array2){
    // Remove repeats
    let temp = [];

    for(let i = 0; i < array2.length; i++){
        let current = array2[i];
        if( temp.includes(current) ) {
            continue;
        }
        temp.push(current);
        if(array1.includes(array2[i])) {
            array1.splice(array1.indexOf(current), 1);
        } else {
            array1.push(current);
        }
    }

    return array1;
}
  
// sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3, 3], [5, 2, 1, 4]);