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
