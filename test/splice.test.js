const { 
  removedAnElement, 
  addAnElement,
  arrayAfterRemoval,
  arrayAfterAddition
} = require('../lib/splice');

describe('splice method tests', () => {
  it('can remove an item from the array', () => {
    expect(removedAnElement).toEqual([5]);
    expect(arrayAfterRemoval).toEqual([1, 2, 3]);
  });

  it('can add an element to the array', () => {
    expect(addAnElement).toEqual([]);
    expect(arrayAfterAddition).toEqual([1, 2, 3, 4, 5]);
  });
});
