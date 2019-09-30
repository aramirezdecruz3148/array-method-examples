// push(...items)
// push returns the new array length

// pop()
//pop removes the last item from an array and returns the value

const array = [1, 6, 7, 3, 5, 9, 10];

const pushItemsToArray = array.push(2, 3, 4);

const popItemsFromArray = array.pop();

module.exports = {
  pushItemsToArray,
  popItemsFromArray
};
