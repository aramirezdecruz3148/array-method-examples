// let results = arr.filter(function(item, index, array) {
//   if true item is pushed to results and the iteration continues
//   returns empty array if nothing found
// });

// The syntax is similar to find, but filter returns an array of all matching elements:

const array1 = [1, 'my wife is the best', 4, 7, 0, 3, 7];
const filtersArraySuccessfully = array1.filter((item) => {
  return item > 0;
});

const array2 = [1, 'my wife is the best', 4, 7, 0, 3, 7];
const doesNotFiltersArraySuccessfully = array2.filter((item) => {
  return item === 10;
});

module.exports = {
  filtersArraySuccessfully,
  doesNotFiltersArraySuccessfully
};
