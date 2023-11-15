import isSymbol from '../isSymbol.js';

describe('isSymbol', () => {
  it('should check that value is symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  it('should check that value is not symbol', () => {
    expect(isSymbol('abc')).toBe(false);
  });
});
