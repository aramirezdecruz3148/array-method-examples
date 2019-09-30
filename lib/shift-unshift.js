
// shift()
// shift removes the first element of an array and returns the value of that element
// if the length of the array === 0 after the removal, undefined is returned

// unshift(...items)
// unshift adds items to the beginning of the array and returns the new length

const array = ['a', 'h', 'y', 'm', 'u'];

const removingFirstItemOfArray = array.shift();

const addingToBeginningOfArray = array.unshift('w');

module.exports = {
  removingFirstItemOfArray,
  addingToBeginningOfArray
};

