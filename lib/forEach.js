// arr.forEach(function(item, index, array) {
//    ... do something with item
// });
// The result of the function does not return anything.

const addingTwoToEachIndex = () => {
  const array = [1, 2, 3, 4];
  let results = [];
  array.forEach(num => {
    results.push(num + 2);
  });
  return results;
};

module.exports = {
  addingTwoToEachIndex
};
