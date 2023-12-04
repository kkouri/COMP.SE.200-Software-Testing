import upperFirst from '../upperFirst.js';

describe('upperFirst', () => {
  it('should convert first char of string to upper case', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  it('should keep all chars upper cased', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  it('should keep first chars upper cased', () => {
    expect(upperFirst('Fred')).toBe('Fred');
   });

   it('should not convert numbers', () => {
    expect(upperFirst('0')).toBe('0');
    expect(upperFirst('1234')).toBe('1234');
    expect(upperFirst('1a2b3c4')).toBe('1a2b3c4');
  });
});
