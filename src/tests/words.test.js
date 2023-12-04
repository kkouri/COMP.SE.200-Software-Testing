import words from '../words.js';

describe('words', () => {
  it('should split string in to words', () => {
    expect(words('fred, barney, & pebbles')).toStrictEqual([
      'fred',
      'barney',
      'pebbles',
    ]);
  });

  it('should split string and char in to words', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual([
      'fred',
      'barney',
      '&',
      'pebbles',
    ]);
  });

  it('should split nums in to words', () => {
    expect(words('1, 2, & 3')).toStrictEqual([
      '1',
      '2',
      '3',
    ]);
  });

});
