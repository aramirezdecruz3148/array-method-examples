const {
  doubledArray
} = require('../lib/map');

describe('map method testing', () => {
  it('can double each number in an array', () => {
    expect(doubledArray).toEqual([2, 4, 10]);
  });
});
