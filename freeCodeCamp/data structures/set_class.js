// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class

class Set {
    constructor() {
    // collection will hold our set
    this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    // change code below this line

    // write your add method here

    // write your remove method here

    // write your size method here

    // change code above this line
}
