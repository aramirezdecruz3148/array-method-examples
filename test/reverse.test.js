const { reversedOriginalArray } = require('../lib/reverse');

describe('reverse testing suite', () => {
  it('can reverse the items in an array', () => {
    expect(reversedOriginalArray).toEqual(['d', 'c', 'b', 'a']);
  });
});
