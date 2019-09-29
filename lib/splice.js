// arr.splice(index[, deleteCount, elem1, ..., elemN])
// it returns an array of deleted items

const array = [1, 2, 3, 5];
const removedAnElement = array.splice(-1, 1);
const arrayAfterRemoval = array;

const array2 = [1, 2, 3, 5];
const addAnElement = array2.splice(-1, 0, 4);
const arrayAfterAddition = array2;

module.exports = {
  removedAnElement,
  addAnElement, 
  arrayAfterRemoval,
  arrayAfterAddition
};
