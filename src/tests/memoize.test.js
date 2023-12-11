import memoize from '../memoize.js';

const object = { a: 1, b: 2 };
const other = { c: 3, d: 4 };
const values = memoize(Object.values);

describe('memoize', () => {
  describe('valid input types', () => {
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

  describe('invalid input types', () => {
    it('should throw a TypeError if func is a number', () => {
      expect(() => memoize(1)).toThrow(TypeError);
    });

    it('should throw a TypeError if func is a string', () => {
      expect(() => memoize('not a function')).toThrow(TypeError);
    });

    it('should throw a TypeError if func is null', () => {
      expect(() => memoize(null)).toThrow(TypeError);
    });

    it('should throw a TypeError if func is undefined', () => {
      expect(() => memoize(undefined)).toThrow(TypeError);
    });

    it('should throw a TypeError if func is NaN', () => {
      expect(() => memoize(NaN)).toThrow(TypeError);
    });

    it('should throw a TypeError if func is a boolean', () => {
      expect(() => memoize(true)).toThrow(TypeError);
    });

    it('should throw a TypeError if func is an object', () => {
      expect(() => memoize({})).toThrow(TypeError);
    });

    it('should throw a TypeError if func is an array', () => {
      expect(() => memoize([])).toThrow(TypeError);
    });

    it('should throw a TypeError if resolver is a number', () => {
      expect(() => memoize(() => {}, 1)).toThrow(TypeError);
    });

    it('should throw a TypeError if resolver is a string', () => {
      expect(() => memoize(() => {}, 'not a function')).toThrow(TypeError);
    });

    it('should throw a TypeError if resolver is NaN', () => {
      expect(() => memoize(() => {}, NaN)).toThrow(TypeError);
    });

    it('should throw a TypeError if resolver is a boolean', () => {
      expect(() => memoize(() => {}, true)).toThrow(TypeError);
    });

    it('should throw a TypeError if resolver is an object', () => {
      expect(() => memoize(() => {}, {})).toThrow(TypeError);
    });

    it('should throw a TypeError if resolver is an array', () => {
      expect(() => memoize(() => {}, [])).toThrow(TypeError);
    });
  });
});
