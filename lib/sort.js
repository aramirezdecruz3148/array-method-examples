// .sort(fn) sorts the array in place, changing its element order
// It also returns the sorted array, but the returned value is 
//usually ignored, as arr itself is modified
//items within the array are sorted as strings by default

const arrayofNumbers = [5, 4, 9, 1, 2];
const sortedNumbers = arrayofNumbers.sort((a, b) => a - b);

const arrayOfLetters = ['f', 'l', 'b', 'a'];
const sortedLetters = arrayOfLetters.sort();

module.exports = {
  sortedNumbers,
  sortedLetters
};
