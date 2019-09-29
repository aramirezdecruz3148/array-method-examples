// let results = arr.filter(function(item, index, array) {
//   if true item is pushed to results and the iteration continues
//   returns empty array if nothing found
// });
// Filter returns an array of all matching elements

const array = [1, 'my wife is the best', 4, 7, 0, 3, 7];

const filtersArraySuccessfully = array.filter(item => item > 0);

const doesNotFiltersArraySuccessfully = array.filter(item => {
  return item === 10;
});

module.exports = {
  filtersArraySuccessfully,
  doesNotFiltersArraySuccessfully
};
