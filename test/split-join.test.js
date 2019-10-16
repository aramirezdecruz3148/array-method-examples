const {
  stringToArray,
  backToString
} = require('../lib/split-join');

describe('split-join methods testing suite', () => {
  it('can return an array of strings', () => {
    expect(stringToArray).toEqual(['This', 'is', 'a', 'sentence', 'contained', 'separated', 'by', 'spaces']);
  });

  it('can return the array of strings back to single string', () => {
    expect(backToString).toEqual('This-is-a-sentence-contained-separated-by-spaces');
  });
});

