// arr.forEach(function(item, index, array) {
//    ... do something with item
// });

const addingTwoToEachIndex = () => {
  const array1 = [1, 2, 3, 4];
  let newArray = [];
  array1.forEach(num => {
    newArray.push(num + 2);
  });
  return newArray;
};

module.exports = {
  addingTwoToEachIndex
};
