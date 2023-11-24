import isSymbol from '../isSymbol.js';

describe('isSymbol', () => {
  it('should check that value is symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
    expect(isSymbol(Symbol('abc'))).toBe(true);
    expect(isSymbol(Symbol.for('foo'))).toBe(true);
  });

  it('should check that value is not symbol', () => {
    expect(isSymbol('abc')).toBe(false);
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol({})).toBe(false);
  });
});
