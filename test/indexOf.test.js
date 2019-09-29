const { canReturnIndexOfItem, returnsNegative1 } = require('../lib/indexOf');
describe('indexOf testing suite', () => {
  it('can find the index of existing item', () => {
    expect(canReturnIndexOfItem).toEqual(2);
  });

  it('can return -1 when item is not found', () => {
    expect(returnsNegative1).toEqual(-1);
  });
});
