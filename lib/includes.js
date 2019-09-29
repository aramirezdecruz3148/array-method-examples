// arr.includes(item, from)

const array1 = [3, 8, 'hi', 7];
const doesIncludeInArray = array1.includes('hi');

const array2 = [3, 8, 'hi', 7];
const doesNotIncludeInArray = array2.includes('love');

module.exports = {
  doesIncludeInArray,
  doesNotIncludeInArray
};
