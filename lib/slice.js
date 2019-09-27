// arr.slice([start], [end])

const array1 = [1, 'hi', 7, 'my wife'];
const makeWholeCopy = array1.slice();

const array2 = [1, 'hi', 7, 'my wife', 5, 8, 9, 'dino', 'turtle'];
const makeCopyFromPositiveIndex = array2.slice(2, 4);

const array3 = [1, 'hi', 7, 'my wife', 5, 8, 9, 'dino', 'turtle'];
const makeCopyFromNegativeIndex = array3.slice(-4);

module.exports = {
  makeWholeCopy,
  makeCopyFromPositiveIndex,
  makeCopyFromNegativeIndex
};
