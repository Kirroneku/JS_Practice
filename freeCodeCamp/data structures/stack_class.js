/*
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class

In the last section, we talked about what a stack is and how we can use an array to represent a stack. 
In this section, we will be creating our own stack class. Although you can use arrays to create stacks, 
sometimes it is best to limit the amount of control we have with our stacks. Apart from the push and pop method, 
stacks have other useful methods. Let's add a peek, isEmpty, and clear method to our stack class.

Write a push method that pushes an element to the top of the stack, a pop method that removes the element on the top of the stack, 
a peek method that looks at the first element in the stack, an isEmpty method that checks if the stack is empty, 
and a clear method that removes all elements from the stack. Normally stacks don't have this, 
but we've added a print helper method that console logs the collection.

*/
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];

function Stack() {
    var collection = [];

    this.print = function() {
      console.log(collection);
    };

    this.push = (item) => {
        collection.push(item);
        return;
    };

    this.pop = () => {
        return collection.pop();
    };

    this.peek = () => {
        return collection[collection.length-1];
    };

    this.isEmpty = () => {
        return collection.length == 0;
    }

    this.clear = () => {
        collection = [];
    }

}
  
let newStack = new Stack();
newStack.push("BIO12");
newStack.peek();
newStack.print();