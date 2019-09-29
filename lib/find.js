// let result = arr.find(function(item, index, array) {
//   if true is returned, item is returned and iteration is stopped
//   for falsy scenario returns undefined
// });
// If it returns true, the search is stopped, the item is returned. 
// If nothing found, undefined is returned.

const array = [{ name: 'Lava', age: 45 }, { name: 'Alex', age: 31 }];

const canFindItemInArray = array.find(item => item.age === 31);

const cannotFindItemInArray = array.find(item => {
  return item.age === 32;
});

module.exports = {
  canFindItemInArray,
  cannotFindItemInArray
};
