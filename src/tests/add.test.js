import add from '../add';

describe('add', () => {
  describe('valid input types', () => {
    it('should add two positive integers', () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(35, 15)).toEqual(50);
    });

    it('should add positive and negative integer', () => {
      expect(add(1, -2)).toEqual(-1);
      expect(add(-35, 15)).toEqual(-20);
    });

    it('should add two negative integers', () => {
      expect(add(-1, -2)).toEqual(-3);
      expect(add(-35, -15)).toEqual(-50);
    });

    it('should add a positive integer and zero', () => {
      expect(add(1, 0)).toEqual(1);
      expect(add(0, 35)).toEqual(35);
    });

    it('should add a negative integer and zero', () => {
      expect(add(-1, 0)).toEqual(-1);
      expect(add(0, -35)).toEqual(-35);
    });

    it('should add zero and zero integers', () => {
      expect(add(0, 0)).toEqual(0);
    });

    it('should add two positive floats', () => {
      expect(add(1.1, 1.2)).toBeCloseTo(2.3, 5);
      expect(add(1.123, 1.234)).toBeCloseTo(2.357, 5);
    });

    it('should add positive and negative floats', () => {
      expect(add(1.1, -1.2)).toBeCloseTo(-0.1, 5);
      expect(add(-1.123, 1.234)).toBeCloseTo(0.111, 5);
    });

    it('should add two negative floats', () => {
      expect(add(-1.1, -1.2)).toBeCloseTo(-2.3, 5);
      expect(add(-1.123, -1.234)).toBeCloseTo(-2.357, 5);
    });

    it('should add a positive float and zero', () => {
      expect(add(1.1, 0)).toBeCloseTo(1.1, 5);
      expect(add(0, 1.234)).toBeCloseTo(1.234, 5);
    });

    it('should add a negative float and zero', () => {
      expect(add(-1.1, 0)).toBeCloseTo(-1.1, 5);
      expect(add(0, -1.234)).toBeCloseTo(-1.234, 5);
    });

    it('should add zero and zero floats', () => {
      expect(add(0.0, 0.0)).toBeCloseTo(0.0, 5);
    });

    it('should add integer and float', () => {
      expect(add(1, 2.1)).toBeCloseTo(3.1, 5);
      expect(add(35, 15.123)).toBeCloseTo(50.123, 5);
    });
  });

  describe('invalid input types', () => {
    it('should throw TypeError when input is undefined', () => {
      expect(() => add(undefined, undefined)).toThrow(TypeError);
      expect(() => add(undefined, 1)).toThrow(TypeError);
      expect(() => add(1, undefined)).toThrow(TypeError);
    });

    it('should throw TypeError when input is null', () => {
      expect(() => add(null, null)).toThrow(TypeError);
      expect(() => add(null, 1)).toThrow(TypeError);
      expect(() => add(1, null)).toThrow(TypeError);
    });

    it('should throw TypeError when input is NaN', () => {
      expect(() => add(NaN, NaN)).toThrow(TypeError);
      expect(() => add(NaN, 1)).toThrow(TypeError);
      expect(() => add(1, NaN)).toThrow(TypeError);
    });

    it('should throw TypeError when input is string', () => {
      expect(() => add('1', '2')).toThrow(TypeError);
      expect(() => add('1', 2)).toThrow(TypeError);
      expect(() => add(1, '2')).toThrow(TypeError);
    });

    it('should throw TypeError when input is array', () => {
      expect(() => add([1], [2])).toThrow(TypeError);
      expect(() => add([1], 2)).toThrow(TypeError);
      expect(() => add(1, [2])).toThrow(TypeError);

      expect(() => add([3, 5], [1, 5])).toThrow(TypeError);
      expect(() => add([3, 5], 1)).toThrow(TypeError);
      expect(() => add(1, [3, 5])).toThrow(TypeError);

      expect(() => add([3, 5], [1])).toThrow(TypeError);
      expect(() => add([3], [1, 5])).toThrow(TypeError);
    });
  });
});
