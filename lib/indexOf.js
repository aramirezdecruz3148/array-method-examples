// arr.indexOf(item, from)

const array1 = [1, 'weee', 2, 'I love my wife', 8];
const canReturnIndexOfItem = array1.indexOf(2);

const array2 = [1, 'weee', 2, 'I love my wife', 8];
const returnsNegative1 = array2.indexOf(4);

module.exports = {
  canReturnIndexOfItem,
  returnsNegative1
};
