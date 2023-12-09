import get from '../get.js';

const testObject = { a: [{ b: { c: 3 } }] };
const testArray = ['a', 'b', 'c'];
const testString = 'abc';

describe('get', () => {
  describe('valid input types', () => {
    it("should return path's value for an object", () => {
      expect(get(testObject, 'a[0].b.c')).toBe(3);
      expect(get(testObject, 'a[0]')).toEqual({ b: { c: 3 } });
      expect(get(testObject, ['a', '0', 'b', 'c'])).toBe(3);
      expect(get(testObject, ['a', '0', 'b', 'c'], 'default')).toBe(3);
    });

    it("should return default as path's value for an object", () => {
      expect(get(testObject, 'a.b.c', 'default')).toBe('default');
    });

    it("should return undefined as path's value for an object", () => {
      expect(get(testObject, 'a.b.c')).toBe(undefined);
    });

    it("should return path's value for an array", () => {
      expect(get(testArray, '0')).toBe('a');
      expect(get(testArray, '1')).toBe('b');
      expect(get(testArray, ['0'])).toBe('a');
      expect(get(testArray, ['1'])).toBe('b');
    });

    it("should return default as path's value for an array", () => {
      expect(get(testArray, '3', 'default')).toBe('default');
    });

    it("should return undefined as path's value for an array", () => {
      expect(get(testArray, '3')).toBe(undefined);
    });

    it("should return path's value for string", () => {
      expect(get(testString, '0')).toBe('a');
      expect(get(testString, '1')).toBe('b');
      expect(get(testString, ['0'])).toBe('a');
      expect(get(testString, ['1'])).toBe('b');
    });

    it("should return default as path's value for a string", () => {
      expect(get(testString, '3', 'default')).toBe('default');
    });

    it("should return undefined as path's value for a string", () => {
      expect(get(testString, '3')).toBe(undefined);
    });

    it('should return undefined if object is null', () => {
      expect(get(null, '0')).toBe(undefined);
    });

    it('should return undefined if object is undefined', () => {
      expect(get(undefined, '0')).toBe(undefined);
    });
  });

  describe('invalid input types', () => {
    it('should throw TypeError if object is number', () => {
      expect(() => get(123, '0')).toThrow(TypeError);
    });

    it('should throw TypeError if object is boolean', () => {
      expect(() => get(true, '0')).toThrow(TypeError);
    });

    it('should throw TypeError if path is number', () => {
      expect(() => get(testObject, 0)).toThrow(TypeError);
    });

    it('should throw TypeError if path is boolean', () => {
      expect(() => get(testObject, true)).toThrow(TypeError);
    });
  });
});
