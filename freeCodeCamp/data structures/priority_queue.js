/*
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class

In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. 
This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. 
If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.

For instance, let’s imagine we have a priority queue with three items:

[['kitten', 2], ['dog', 2], ['rabbit', 2]]

Here the second value (an integer) represents item priority. If we enqueue ['human', 1] with a priority of 1 (assuming lower priorities are given precedence) 
it would then be the first item to be dequeued. The collection would like this:

[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]].

We’ve started writing a PriorityQueue in the code editor. You will need to add an enqueue method for adding items with a priority,
a dequeue method for removing items, a size method to return the number of items in the queue, 
a front method to return the element at the front of the queue, and finally an isEmpty method that will return true if the queue is empty or false if it is not.

The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. The dequeue should return only the current item, not its priority.
*/

function PriorityQueue () {
  // Using a hashmap to find the right priority queue to save time
  // Otherwise would need to go throw the whole queue
  this.collection = [];

  this.printCollection = function() {
    console.log(this.collection);
  };

  this.enqueue = (item) => {
    for(let i in this.collection) {
        if( this.collection[i][1] > item[1] ) {
            this.collection.splice(i, 0, item);
            return;
        }
    }

    this.collection.push(item);      
  }

  this.dequeue = () => {
    return this.collection.shift()[0];
      
  }

  this.size = () => this.collection.length;

  this.isEmpty = () => this.collection.length == 0;
}

// Some testing
let newQueue = new PriorityQueue();

newQueue.enqueue(["BIO11", 1]);
newQueue.enqueue(["BIO10", 1]);
newQueue.enqueue(["BIO10", 2]);
newQueue.enqueue(["humans", 2]);
newQueue.enqueue(["dogs", 2]);
newQueue.enqueue(["BIO12", 1]);
newQueue.printCollection();
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
newQueue.printCollection();