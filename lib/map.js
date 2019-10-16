// let result = arr.map(function(item, index, array) {
//   returns the new value instead of item
// });
// It calls the function for each element of the array and returns the array of results.

const array = [1, 2, 5];

const doubledArray = array.map(num => num * 2);

module.exports = {
  doubledArray
};
