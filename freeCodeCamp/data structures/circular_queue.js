// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue
// Too long to copy paste

class CircularQueue {
    constructor(size) {
 
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size;
      this.diff = 0;

      while (size > 0) {
         this.queue.push(null);
         size--;
      }
    }
 
    print() {
      return this.queue;
    }
 
    enqueue(item) {
      if(this.diff == this.max) {
        return null;
      }
      this.diff ++;
      this.queue[this.write] = item;
      this.write = (this.write + 1) % this.max;
      return item;
    }
 
    dequeue() {
      if(this.diff === 0) {
        return null;
      }
      this.diff--;
      let readItem = this.queue[this.read];
      this.queue[this.read] = null;

      this.read = (this.read + 1) % this.max;
      return readItem;
    }
 }
 
 let i = new CircularQueue(4);
 console.log(i.enqueue("a"));
 console.log(i.enqueue("b"));
 console.log(i.enqueue("c"));
 console.log(i.dequeue());
 console.log(i.dequeue());
 console.log(i.dequeue());
 console.log(i.dequeue());