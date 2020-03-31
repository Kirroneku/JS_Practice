/*
    Let's create the basic functionality of a hash table. We've created a naive hashing function for you to use. 
    You can pass a string value to the function hash and it will return a hashed value you can use as a key for storage. 
    Store items based on this hashed value in the this.collection object. Create these three methods: add, remove, and lookup. 
    The first should accept a key value pair to add to the hash table. The second should remove a key-value pair when passed a key. 
    The third should accept a key and return the associated value or null if the key is not present.

    Be sure to write your code to account for collisions!
*/

var called = 0;

var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = () => {
      
  }
  // change code above this line
};
