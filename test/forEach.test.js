const { addingTwoToEachIndex } = require('../lib/forEach');

describe('forEach testing suite', () => {
  it('can add 2 two each index in array', () => {
    expect(addingTwoToEachIndex()).toEqual([3, 4, 5, 6]);
  });
});
