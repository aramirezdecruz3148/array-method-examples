// arr.splice(index[, deleteCount, elem1, ..., elemN])

const array1 = [1, 2, 3, 5];
const removedAnElement = array1.splice(-1, 1);
const arrayAfterRemoval = array1;

const array2 = [1, 2, 3, 5];
const addAnElement = array2.splice(-1, 0, 4);
const arrayAfterAddition = array2;

module.exports = {
  removedAnElement,
  addAnElement, 
  arrayAfterRemoval,
  arrayAfterAddition
};
