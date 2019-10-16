// string.split(separator, limit)
// It splits the string into an array by the given separator
// If '' is passed it will split by letter

// arr.join(glue)
// It creates a string of arr items joined by glue between them

const string = 'This is a sentence contained separated by spaces';

const stringToArray = string.split(' ');

const backToString = stringToArray.join('-');

module.exports = {
  stringToArray,
  backToString
};

