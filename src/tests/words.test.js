import words from '../words.js';

describe('words', () => {
  describe('valid inputs', () => {
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
      expect(words('1, 2, & 3')).toStrictEqual(['1', '2', '3']);
    });

    it('should split empty string in to empty array', () => {
      expect(words('')).toStrictEqual([]);
    });

    it('should split string with only spaces in to empty array', () => {
      expect(words('   ')).toStrictEqual([]);
    });

    it('should split string with only commas in to empty array', () => {
      expect(words(',,,')).toStrictEqual([]);
    });
  });

  describe('invalid inputs', () => {
    it('should throw TypeError when input is number', () => {
      expect(() => words(1)).toThrow(TypeError);
    });

    it('should throw TypeError when input is null', () => {
      expect(() => words(null)).toThrow(TypeError);
    });

    it('should throw TypeError when input is undefined', () => {
      expect(() => words(undefined)).toThrow(TypeError);
    });

    it('should throw TypeError when input is array', () => {
      expect(() => words([])).toThrow(TypeError);
    });

    it('should throw TypeError when input is object', () => {
      expect(() => words({})).toThrow(TypeError);
    });
  });
});
