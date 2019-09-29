// arr.concat(arg1, arg2...)

const array1 = [3, 5, 7, 9, 'orange', 'blue', 16, 23];
const arrayCombinedWithValue = array1.concat('yellow');

const array2 = [3, 5, 7, 9, 'orange'];
const array3 = ['blue', 16, 23];
const multipleArraysConcated = array2.concat(array3);

module.exports = {
  arrayCombinedWithValue,
  multipleArraysConcated
};
