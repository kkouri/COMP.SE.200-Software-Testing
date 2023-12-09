import upperFirst from '../upperFirst.js';

describe('upperFirst', () => {
  describe('valid input types', () => {
    it('should convert first char of string to upper case', () => {
      expect(upperFirst('fred')).toBe('Fred');
    });

    it('should keep all chars upper cased', () => {
      expect(upperFirst('FRED')).toBe('FRED');
    });

    it('should keep first chars upper cased', () => {
      expect(upperFirst('Fred')).toBe('Fred');
    });

    it('should not convert numbers', () => {
      expect(upperFirst('0')).toBe('0');
      expect(upperFirst('1234')).toBe('1234');
      expect(upperFirst('1a2b3c4')).toBe('1a2b3c4');
    });

    it('should not convert special characters', () => {
      expect(upperFirst(' ')).toBe(' ');
      expect(upperFirst('-')).toBe('-');
      expect(upperFirst('!@#$%^&*()')).toBe('!@#$%^&*()');
      expect(upperFirst('`~')).toBe('`~');
    });

    it('should not convert empty string', () => {
      expect(upperFirst('')).toBe('');
    });
  });

  describe('invalid input types', () => {
    it('should throw TypeError if input type is number', () => {
      expect(upperFirst(0)).toThrow(TypeError);
      expect(upperFirst(1234)).toThrow(TypeError);
      expect(upperFirst(1.234)).toThrow(TypeError);
    });

    it('should throw TypeError if input type is null', () => {
      expect(upperFirst(null)).toThrow(TypeError);
    });

    it('should throw TypeError if input type is undefined', () => {
      expect(upperFirst(undefined)).toThrow(TypeError);
    });

    it('should throw TypeError if input type is boolean', () => {
      expect(upperFirst(true)).toThrow(TypeError);
      expect(upperFirst(false)).toThrow(TypeError);
    });
  });
});
