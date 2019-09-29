const { doesIncludeInArray, doesNotIncludeInArray } = require('../lib/includes');

describe('includes testing suite', () => {
  it('returns true when array includes item', () => {
    expect(doesIncludeInArray).toBeTruthy();
  });

  it('returns false when array does not include item', () => {
    expect(doesNotIncludeInArray).toBeFalsy();
  });
});
