const { sortedNumbers, sortedLetters } = require('../lib/sort');

describe('sort testing suite', () => {
  it('can sort array of numbers', () => {
    expect(sortedNumbers).toEqual([1, 2, 4, 5, 9]);
  });

  it('can sort an array of letters', () => {
    expect(sortedLetters).toEqual(['a', 'b', 'f', 'l']);
  });
});
