// arr.includes(item, from)
// returns either true or false if item is included in the array.

const array = [3, 8, 'hi', 7];

const doesIncludeInArray = array.includes('hi');

const doesNotIncludeInArray = array.includes('love');

module.exports = {
  doesIncludeInArray,
  doesNotIncludeInArray
};
