import isEmpty from '../isEmpty.js';

describe('isEmpty', () => {
  it('should check that string is empty', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should check that number is empty', () => {
    expect(isEmpty(1)).toBe(true);
  });

  it('should check that container is empty', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  it('should check that boolean is empty', () => {
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(true)).toBe(true);
  });

  it('should check that empty is empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
  });

  it('should check that value is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(' ')).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});
