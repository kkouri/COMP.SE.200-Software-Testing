import map from '../map.js';

const testArray1 = [1, 2, 3];
const testArray2 = [4, 8];

function square(n) {
  return n * n;
}
function getLength(value) {
  return value.length;
}

describe('map', () => {
  describe('valid input types', () => {
    it('should iterate array values with given function', () => {
      expect(map(testArray1, square)).toStrictEqual([1, 4, 9]);
      expect(map(testArray2, square)).toStrictEqual([16, 64]);
      expect(map(['foo', 'bar'], getLength)).toStrictEqual([3, 3]);
    });

    it('should not modify original array', () => {
      map(testArray1, (n) => n);
      expect(testArray1).toStrictEqual([1, 2, 3]);
    });

    it('should return empty array if array is empty', () => {
      expect(map([], square)).toStrictEqual([]);
    });

    it('should return empty array if array is null', () => {
      expect(map(null, square)).toStrictEqual([]);
    });

    it('should return empty array if array is undefined', () => {
      expect(map(undefined, square)).toStrictEqual([]);
    });
  });

  describe('invalid input types', () => {
    it('should throw TypeError if array is a string', () => {
      expect(() => map('foo', square)).toThrow(TypeError);
    });

    it('should throw TypeError if array is a number', () => {
      expect(() => map(1, square)).toThrow(TypeError);
    });

    it('should throw TypeError if array is a boolean', () => {
      expect(() => map(true, square)).toThrow(TypeError);
    });

    it('should throw TypeError if array is an object', () => {
      expect(() => map({}, square)).toThrow(TypeError);
    });

    it('should throw TypeError if iteratee is a string', () => {
      expect(() => map(testArray1, 'square')).toThrow(TypeError);
    });

    it('should throw TypeError if iteratee is a number', () => {
      expect(() => map(testArray1, 1)).toThrow(TypeError);
    });

    it('should throw TypeError if iteratee is a boolean', () => {
      expect(() => map(testArray1, true)).toThrow(TypeError);
    });

    it('should throw TypeError if iteratee is an object', () => {
      expect(() => map(testArray1, {})).toThrow(TypeError);
    });

    it('should throw TypeError if iteratee is an array', () => {
      expect(() => map(testArray1, [])).toThrow(TypeError);
    });

    it('should throw TypeError if iteratee is null', () => {
      expect(() => map(testArray1, null)).toThrow(TypeError);
    });

    it('should throw TypeError if iteratee is undefined', () => {
      expect(() => map(testArray1, undefined)).toThrow(TypeError);
    });
  });
});
