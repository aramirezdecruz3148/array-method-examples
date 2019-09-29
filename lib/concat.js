// arr.concat(arg1, arg2...)
// The result is a new array containing items from arr, then arg1, arg2 etc.
// If an argument argN is an array, then all its elements are copied. 
// Otherwise, the argument itself is copied.

const array = [3, 5, 7, 9, 'orange', 'blue', 16, 23];

const secondArray = ['yellow', 50, 4, 'brown'];

const arrayCombinedWithValue = array.concat('yellow');

const multipleArraysConcated = array.concat(secondArray);

module.exports = {
  arrayCombinedWithValue,
  multipleArraysConcated
};
