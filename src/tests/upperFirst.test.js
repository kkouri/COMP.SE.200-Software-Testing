import upperFirst from '../upperFirst.js';

describe('upperFirst', () => {
  it('should convert first char of string to upper case', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  it('should keep all chars upper cased', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });
});
