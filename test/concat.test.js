const { 
  arrayCombinedWithValue,
  multipleArraysConcated 
} = require('../lib/concat');

describe('Concat Method testing', () => {
  it('can add specific value to array', () => {
    expect(arrayCombinedWithValue).toEqual([3, 5, 7, 9, 'orange', 'blue', 16, 23, 'yellow']);
  });

  it('can concat two arrays together', () => {
    expect(multipleArraysConcated).toEqual([3, 5, 7, 9, 'orange', 'blue', 16, 23, 'yellow', 50, 4, 'brown']);
  });
});
