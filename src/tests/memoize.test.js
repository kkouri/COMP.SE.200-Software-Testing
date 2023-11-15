import memoize from '../memoize.js';

const object = { a: 1, b: 2 };
const other = { c: 3, d: 4 };
const values = memoize(Object.values);

describe('memoize', () => {
  it('should cache 1 & 2 as result 1', () => {
    expect(values(object)).toStrictEqual([1, 2]);
  });

  it('should cache 3 & 4 as result', () => {
    expect(values(other)).toStrictEqual([3, 4]);
  });

  it('should cache 1 & 2 as result 2', () => {
    object.a = 2;
    expect(values(object)).toStrictEqual([1, 2]);
  });

  it('should modify the result cache', () => {
    values.cache.set(object, ['a', 'b']);
    expect(values(object)).toStrictEqual(['a', 'b']);
  });
});
