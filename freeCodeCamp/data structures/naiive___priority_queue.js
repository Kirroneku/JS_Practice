/*
NAIVE IMPLEMENTATION -- HASHMAPS ARE PRETTY DARN EXPENSIVE TO ITERATE THROUGH 
PLUS DOES NOT TAKE ADVANTAGE OF THE HASHMAP'S GOOD PROPERTIES (Fast lookup) SINCE
I AM USING ITERATION


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
    this.collection = new Map();
    this.totalSize = 0;

    this.printCollection = function() {
      console.log(this.collection);
    };

    this.enqueue = (item) => {
        let key = item[1];
        if(typeof key != 'number') {
            console.error("Priority must be a number");
        } else {
            // Get the current priority queue
            let currentQueue = this.collection.get(key);
            // Create queue if it doesnt exist
            if(currentQueue != undefined){
                currentQueue.push(item[0]);
            } else {
                currentQueue = [item[0]];
            }
            this.collection.set(key, currentQueue);
        }
        this.totalSize++;
    }

    this.dequeue = () => {
        if(this.totalSize == 0) return undefined;
        // Go through map to find lowest key'd queue
        // Dequeue and remove if empty
        let min = 5;
        for(const [key, value] of this.collection.entries()){
            min = Math.min(key, min);
        }

        console.log(min);

        let currentQueue = this.collection.get(min);

        let dequeued = currentQueue.shift();
        if( currentQueue.length == 0 ) {
            this.collection.delete(min);
        }

        this.totalSize--;

        return dequeued;
    }

    this.size = () => this.totalSize;

    this.isEmpty = () => this.totalSize == 0;
}

// Some testing
let newQueue = new PriorityQueue();
newQueue.enqueue(["BIO10", 2]);
newQueue.enqueue(["humans", 2]);
newQueue.enqueue(["dogs", 2]);
newQueue.enqueue(["BIO12", 1]);
newQueue.printCollection();
console.log(newQueue.dequeue());
newQueue.printCollection();