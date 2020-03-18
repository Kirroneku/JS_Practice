// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class

class Set {
    constructor() {
    // collection will hold our set
    this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has( element ) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    // change code below this line

    // write your add method here
    add( element ) {
        if( this.collection.indexOf(element) !== -1 ) {
            return false;
        }
        this.collection.push( element )
        return true;
    }
    
    // write your remove method here
    remove( element ) {
        let index = this.collection.indexOf(element);
        if( index !== -1 ) {
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }
    // write your size method here
    size() {
        return this.collection.length;
    }
    // change code above this line
}
