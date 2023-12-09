import words from '../words.js';

describe('words', () => {
  describe('valid input types', () => {
    it('should split a string in to words', () => {
      expect(words('fred, barney, & pebbles')).toStrictEqual([
        'fred',
        'barney',
        'pebbles',
      ]);
    });

    it('should split a string and a char in to words', () => {
      expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual([
        'fred',
        'barney',
        '&',
        'pebbles',
      ]);
    });

    it('should split number array in to words', () => {
      expect(words('1, 2, & 3')).toStrictEqual(['1', '2', '3']);
    });

    it('should split an empty string in to an empty array', () => {
      expect(words('')).toStrictEqual([]);
    });

    it('should split a string with only spaces in to an empty array', () => {
      expect(words('   ')).toStrictEqual([]);
    });

    it('should split a string with only commas in to an empty array', () => {
      expect(words(',,,')).toStrictEqual([]);
    });
  });

  describe('invalid input types', () => {
    it('should throw TypeError when input is a number', () => {
      expect(() => words(1)).toThrow(TypeError);
    });

    it('should throw TypeError when input is null', () => {
      expect(() => words(null)).toThrow(TypeError);
    });

    it('should throw TypeError when input is undefined', () => {
      expect(() => words(undefined)).toThrow(TypeError);
    });

    it('should throw TypeError when input is an array', () => {
      expect(() => words([])).toThrow(TypeError);
    });

    it('should throw TypeError when input is an object', () => {
      expect(() => words({})).toThrow(TypeError);
    });
  });
});
