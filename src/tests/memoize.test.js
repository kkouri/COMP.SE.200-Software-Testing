import memoize from '../memoize.js';

const object = { a: 1, b: 2 };
const other = { c: 3, d: 4 };
const values = memoize(Object.values);

describe('memoize', () => {
  describe('valid inputs', () => {
    it('should return the new memoized function', () => {
      const memoized = memoize(() => {});
      expect(typeof memoized).toBe('function');
    });

    it('should cache 1 & 2 as result', () => {
      expect(values(object)).toStrictEqual([1, 2]);
    });

    it('should cache 3 & 4 as result', () => {
      expect(values(other)).toStrictEqual([3, 4]);
    });

    it('should cache 1 & 2 as result', () => {
      object.a = 2;
      expect(values(object)).toStrictEqual([1, 2]);
    });

    it('should modify the result cache', () => {
      values.cache.set(object, ['a', 'b']);
      expect(values(object)).toStrictEqual(['a', 'b']);
    });
  });

  describe('invalid inputs', () => {
    it('should throw a TypeError if the first argument is not a function', () => {
      expect(() => memoize(1)).toThrow(TypeError);
      expect(() => memoize('not a function')).toThrow(TypeError);
      expect(() => memoize(null)).toThrow(TypeError);
      expect(() => memoize(undefined)).toThrow(TypeError);
      expect(() => memoize(NaN)).toThrow(TypeError);
      expect(() => memoize(true)).toThrow(TypeError);
      expect(() => memoize({})).toThrow(TypeError);
      expect(() => memoize([])).toThrow(TypeError);
    });

    it('should throw a TypeError if the second argument is not a function or nullish type', () => {
      expect(() => memoize(() => {}, 1)).toThrow(TypeError);
      expect(() => memoize(() => {}, 'not a function')).toThrow(TypeError);
      expect(() => memoize(() => {}, NaN)).toThrow(TypeError);
      expect(() => memoize(() => {}, true)).toThrow(TypeError);
      expect(() => memoize(() => {}, {})).toThrow(TypeError);
      expect(() => memoize(() => {}, [])).toThrow(TypeError);
    });
  });
});
