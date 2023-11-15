import isEmpty from '../isEmpty.js';

describe('isEmpty', () => {
  it('should check that value is empty 1', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should check that value is empty 2', () => {
    expect(isEmpty(true)).toBe(true);
  });

  it('should check that value is empty 3', () => {
    expect(isEmpty(1)).toBe(true);
  });

  it('should check that value is not empty 1', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should check that value is not empty 2', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  it('should check that value is not empty 3', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});
