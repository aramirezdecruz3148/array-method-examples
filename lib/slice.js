// arr.slice([start], [end])
// It returns a new array copying to it all items from index start to end (not including end). 
// Both start and end can be negative, in that case position from array end is assumed.

const array = [1, 'hi', 7, 'my wife', 5, 8, 9, 'dino', 'turtle'];

const makeWholeCopy = array.slice();

const makeCopyFromPositiveIndex = array.slice(2, 4);

const makeCopyFromNegativeIndex = array.slice(-4);

module.exports = {
  makeWholeCopy,
  makeCopyFromPositiveIndex,
  makeCopyFromNegativeIndex
};
