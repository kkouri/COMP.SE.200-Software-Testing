describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('should add positive and negative numbers', () => {
    expect(add(1, -2)).toBe(-1);
  });

  it('should add two negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('should add a negative number and zero', () => {
    expect(add(-1, 0)).toBe(-1);
  });
});
