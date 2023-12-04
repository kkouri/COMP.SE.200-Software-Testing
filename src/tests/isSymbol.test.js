import isSymbol from '../isSymbol.js';

describe('isSymbol', () => {
  it('should check that value is symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
    expect(isSymbol(Symbol('abc'))).toBe(true);
    expect(isSymbol(Symbol.for('foo'))).toBe(true);
    expect(isSymbol(Symbol(1))).toBe(true);
    expect(isSymbol(Symbol(0))).toBe(true);
  });

  it('should check that string is not symbol', () => {
    expect(isSymbol('abc')).toBe(false);
    expect(isSymbol('Symbol')).toBe(false);
  });

  it('should check that number is not symbol', () => {
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(-1)).toBe(false);
    expect(isSymbol(1.1)).toBe(false);
  });

  it('should check that empty value is not symbol', () => {
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
  });

  it('should check that boolean is not symbol', () => {
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
  });

  it('should check that container is not symbol', () => {
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
  });
});
