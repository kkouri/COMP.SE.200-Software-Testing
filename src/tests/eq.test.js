import eq from '../eq.js';

const object = { a: 1 };
const other = { a: 1 };

describe('eq', () => {
  it('should determine that objects are equal', () => {
    expect(eq(object, object)).toBe(true);
  });

  it('should determine that objects are not equal', () => {
    expect(eq(object, other)).toBe(false);
  });

  it('should determine that strings are equal', () => {
    expect(eq('a', 'a')).toBe(true);
  });

  it('should determine that values are not equal', () => {
    expect(eq('a', Object('a'))).toBe(false);
  });

  it('should determine that chars are not equal', () => {
    expect(eq('a', 'b')).toBe(false);
  });

  it('should determine that empty values are equal', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });
});
