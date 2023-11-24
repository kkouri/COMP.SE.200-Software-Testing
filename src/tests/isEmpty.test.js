import isEmpty from '../isEmpty.js';

describe('isEmpty', () => {
  it('should check that value is empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('should check that value is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});
