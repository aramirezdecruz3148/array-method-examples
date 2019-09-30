const { removingFirstItemOfArray, addingToBeginningOfArray } = require('../lib/shift-unshift');

describe('shift and unshift testing suite', () => {
  it('can remove an element from the beginning of the array', () => {
    expect(removingFirstItemOfArray).toEqual('a');
  });

  it('can add an element to the beginning of the array', () => {
    expect(addingToBeginningOfArray).toEqual(5);
  });
});
