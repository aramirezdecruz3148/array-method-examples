const { pushItemsToArray, popItemsFromArray } = require('../lib/push-pop');

describe('push-pop testing suite', () => {
  it('can add items to the end of an array', () => {
    expect(pushItemsToArray).toEqual(10);
  });

  it('can extract items to the end of an array', () => {
    expect(popItemsFromArray).toEqual(4);
  });
});
