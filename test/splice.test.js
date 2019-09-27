const { removedAnElement } = require('../lib/splice');

describe('splice method tests', () => {
  it('can remove an item from the array', () => {
    removedAnElement;
    expect(removedAnElement).toEqual([5]);
  });
});
