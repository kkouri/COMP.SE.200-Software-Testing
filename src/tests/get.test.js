import get from '../get.js';

const object = { a: [{ b: { c: 3 } }] };

describe('get', () => {
  it('should return path value for object', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    expect(get(object, ['a', '0', 'b', 'c'], 'default')).toBe(3);
  });

  it("should return default as path's value for object", () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  it('should return undefined as path value for object', () => {
    expect(get(object, 'a.b.c')).toBe(undefined);
  });

  it('should return path value for array', () => {
    expect(get(['a', 'b', 'c'], '0')).toBe('a');
    expect(get(['a', 'b', 'c'], '1')).toBe('b');
  });

  it("should return default as path's value for array", () => {
    expect(get(['a', 'b', 'c'], '3', 'default')).toBe('default');
  });
});
