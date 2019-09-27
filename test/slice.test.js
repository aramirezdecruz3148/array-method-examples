const { 
  makeWholeCopy,
  makeCopyFromPositiveIndex,
  makeCopyFromNegativeIndex
} = require('../lib/slice');

describe('slice test cases', () => {
  it('can make a copy of the original', () => {
    expect(makeWholeCopy).toEqual([1, 'hi', 7, 'my wife']);
  });

  it('can make a copy from starting/ending indexes', () => {
    expect(makeCopyFromPositiveIndex).toEqual([7, 'my wife']);
  });

  it('can make a copy from the starting index to the end', () => {
    expect(makeCopyFromNegativeIndex).toEqual([8, 9, 'dino', 'turtle']);
  });
});
