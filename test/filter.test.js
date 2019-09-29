const { filtersArraySuccessfully, doesNotFiltersArraySuccessfully } = require('../lib/filter');

describe('filter test suite', () => {
  it('can filter array successfully', () => {
    expect(filtersArraySuccessfully).toEqual([1, 4, 7, 3, 7]);
  });

  it('returns empty array when filter condition cannot be met', () => {
    expect(doesNotFiltersArraySuccessfully).toEqual([]);
  });
});
