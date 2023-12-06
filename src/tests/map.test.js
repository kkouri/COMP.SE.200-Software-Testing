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
  describe('Valid cases', () => {
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

    it('should return empty array if array is null or undefined', () => {
      expect(map(null, square)).toStrictEqual([]);
      expect(map(undefined, square)).toStrictEqual([]);
    });
  });

  describe('Invalid cases', () => {
    it('should throw error if iteratee is not a function', () => {
      expect(() => map(testArray1, 'square')).toThrow(TypeError);
      expect(() => map(testArray1, 1)).toThrow(TypeError);
      expect(() => map(testArray1, true)).toThrow(TypeError);
      expect(() => map(testArray1, {})).toThrow(TypeError);
      expect(() => map(testArray1, [])).toThrow(TypeError);
      expect(() => map(testArray1, null)).toThrow(TypeError);
      expect(() => map(testArray1, undefined)).toThrow(TypeError);
    });

    it('should throw error if array is not an array', () => {
      expect(() => map(1, square)).toThrow(TypeError);
      expect(() => map(true, square)).toThrow(TypeError);
      expect(() => map({}, square)).toThrow(TypeError);
    });
  });
});
