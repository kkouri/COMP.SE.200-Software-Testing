import get from '../get.js';

const object = { a: [{ b: { c: 3 } }] };

describe('get', () => {
  it("return 3 as path's value for object 1", () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it("return 3 as path's value for object 2", () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it("return default as path's value for object", () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });
});
