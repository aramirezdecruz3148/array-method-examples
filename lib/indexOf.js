// arr.indexOf(item, from)
// it returns the index of where the item is located in the array
// if the item cannot be found it returns -1

const array = [1, 'weee', 2, 'I love my wife', 8];

const canReturnIndexOfItem = array.indexOf(2);

const returnsNegative1 = array.indexOf(4);

module.exports = {
  canReturnIndexOfItem,
  returnsNegative1
};
