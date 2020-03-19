// Create Set
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-and-add-to-sets-in-es6
var set = new Set([1, 2, 3, 'Taco', 'Cat', 'Awesome']);
// change code below this line

// change code above this line
console.log(Array.from(set));
return set;

  
// Remove
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/remove-items-from-a-set-in-es6

var setr = new Set([1, 2, 3, 4, 5])//Create a set with values 1, 2, 3, 4, & 5
//Remove the value 2
//Remove the value 5
//Return the set
setr.delete(2);
setr.delete(5);


function checkSet(arrToBeSet, checkValue){
    let set = new Set(arrToBeSet);
    return [set.has(checkValue), set.size];    
}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]
 
 
 