import words from '../words.js';

describe('words', () => {
  it('should split string in to words', () => {
    expect(words('fred, barney, & pebbles')).toStrictEqual([
      'fred',
      'barney',
      'pebbles',
    ]);
  });

  it('should split string and chaar in to words', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual([
      'fred',
      'barney',
      '&',
      'pebbles',
    ]);
  });
});
