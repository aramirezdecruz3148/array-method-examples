const { canFindItemInArray, cannotFindItemInArray } = require('../lib/find');

describe('find testing suite', () => {
  it('can find and return item in array', () => {
    expect(canFindItemInArray).toBeTruthy();
    expect(canFindItemInArray).toEqual({ name: 'Alex', age: 31 });
  });

  it('can find and return item in array', () => {
    expect(cannotFindItemInArray).toBeFalsy();
    expect(cannotFindItemInArray).toBeUndefined();
  });
});
