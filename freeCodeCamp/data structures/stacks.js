/*
You are probably familiar with stack of books on your table. 
You have likely used the undo feature of a text editor. You are also probably used to hitting the back button on your phone to go back to the previous view in your app.

You know what they all have in common? They all store the data in a way so that you can traverse backwards.

The topmost book in the stack was the one that was put there last. 
If you remove that book from your stack's top, you would expose the book that was put there before the last book and so on.

If you think about it, in all the above examples, you are getting Last-In-First-Out type of service. 
We will try to mimic this with our code.

This data storage scheme is called a Stack. 
In particular, we would have to implement the push() method that pushes JavaScript objects at the top of the stack; 
and pop() method, that removes the JavaScript object that's at the top of the stack at the current moment.
*/

var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];

// Implements a stack with push and pop @ begging of stack
class stack {
    constructor(array) {
        if( array != undefined ) {
            this.stackArray = array;
        } else {
            this.stackArray = [];
        }
        
    }

    push(item) {
        this.stackArray.splice(0, item);
        return;
    }

    pop(item) {
        return this.stackArray.splice(0, 1)[0];
    }

    getStack () {
        return this.stackArray;
    };
}

var stackHomework = new stack();
console.log(stackHomework.pop());
console.log(stackHomework.stackArray);

// Or in terms of freeCodeCamp 
homeworkStack.pop();
homeworkStack.push("CS50");