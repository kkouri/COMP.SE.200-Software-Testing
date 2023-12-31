import isSymbol from '../isSymbol.js';

describe('isSymbol', () => {
  it('should check that value is a symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
    expect(isSymbol(Symbol('abc'))).toBe(true);
    expect(isSymbol(Symbol.for('foo'))).toBe(true);
    expect(isSymbol(Symbol(1))).toBe(true);
    expect(isSymbol(Symbol(0))).toBe(true);
  });

  it('should check that string is not a symbol', () => {
    expect(isSymbol('')).toBe(false);
    expect(isSymbol('a')).toBe(false);
    expect(isSymbol('Symbol')).toBe(false);
  });

  it('should check that number is not a symbol', () => {
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(-1)).toBe(false);
    expect(isSymbol(1.1)).toBe(false);
  });

  it('should check that null is not a symbol', () => {
    expect(isSymbol(null)).toBe(false);
  });

  it('should check that undefined is not a symbol', () => {
    expect(isSymbol(undefined)).toBe(false);
  });

  it('should check that NaN is not a symbol', () => {
    expect(isSymbol(NaN)).toBe(false);
  });

  it('should check that boolean is not a symbol', () => {
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
  });

  it('should check that object is not a symbol', () => {
    expect(isSymbol({})).toBe(false);
    expect(isSymbol({ a: 1 })).toBe(false);
  });

  it('should check that array is not a symbol', () => {
    expect(isSymbol([])).toBe(false);
    expect(isSymbol([1, 2, 3])).toBe(false);
  });
});
