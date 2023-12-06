import isEmpty from '../isEmpty.js';

describe('isEmpty', () => {
  it('should check that string is empty', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should check that string is not empty', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(' ')).toBe(false);
  });

  it('should check that array is empty', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should check that array is not empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should check that object is empty', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should check that object is not empty', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('should check that number is empty', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(-1)).toBe(true);
  });

  it('should check that boolean is empty', () => {
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(true)).toBe(true);
  });

  it('should check that null is empty', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should check that undefined is empty', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should check that NaN is empty', () => {
    expect(isEmpty(NaN)).toBe(true);
  });
});
