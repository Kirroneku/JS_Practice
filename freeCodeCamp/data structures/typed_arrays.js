// Nice Explaination of typed_arrays
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/typed-arrays

var byteSize = 64;
var buffer = new ArrayBuffer(byteSize);
var i32View = new Int32Array(buffer);
