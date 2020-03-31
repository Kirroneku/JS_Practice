/*
Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure than anything we could write here, 
this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. What if we wanted to define 
custom operations? Use the Map object provided here as a wrapper around a JavaScript object. Create the following methods and operations on the Map object:

add accepts a key, value pair to add to the map.
remove accepts a key and removes the associated key, value pair
get accepts a key and returns the stored value
has accepts a key and returns true if the key exists or false if it doesn't.
values returns an array of all the values in the map
size returns the number of items in the map
clear empties the map
*/

var Map = function() {
    this.collection = {};
    this.length = 0;
    // change code below this line
    this.add = ( key, value ) => {
      this.collection[key] = value;
      this.length++;
    }

    this.remove = ( key ) => {
      if(this.has(key)) {
        this.collection[key] = undefined;
        delete this.collection[key];
        this.length--;
      }
    }

    this.get = ( key ) => {
      return this.collection[key];
    }

    this.has = ( key ) => {
      return this.collection[key] != undefined;
    }

    this.values = () => {
      let values = [];
      for(let i in this.collection) {
        values.push(this.collection[i]);
      }

      return values;
    }

    this.size = () => {
      return this.length;
    }

    this.clear = () => {
      this.collection = {};
      this.length = 0;
    }
    // change code above this line
};
  

let map = new Map();
map.add("yes", "no");
map.add("no", "yes");
console.log(map.collection);
console.log(map.values());
map.remove('yes');
console.log(map.values());
console.log(map.size());
