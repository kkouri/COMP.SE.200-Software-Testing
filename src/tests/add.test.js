describe('add', () => {
  describe('Accepted input types', () => {
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

  describe('Wrong input types', () => {
    it('Should not add undefined values', () => {
      expect(add(undefined, undefined)).toThrowError(TypeError);
      expect(add(undefined, 1)).toThrowError(TypeError);
      expect(add(1, undefined)).toThrowError(TypeError);
    });

    it('Should not add null values', () => {
      expect(add(null, null)).toThrowError(TypeError);
      expect(add(null, 1)).toThrowError(TypeError);
      expect(add(1, null)).toThrowError(TypeError);
    });

    it('Should not add NaN values', () => {
      expect(add(NaN, NaN)).toThrowError(TypeError);
      expect(add(NaN, 1)).toThrowError(TypeError);
      expect(add(1, NaN)).toThrowError(TypeError);
    });

    it('Should not add string values', () => {
      expect(add('1', '2')).toThrowError(TypeError);
      expect(add('1', 2)).toThrowError(TypeError);
      expect(add(1, '2')).toThrowError(TypeError);
    });

    it('Should not add array values', () => {
      expect(add([1], [2])).toThrowError(TypeError);
      expect(add([1], 2)).toThrowError(TypeError);
      expect(add(1, [2])).toThrowError(TypeError);

      expect(add([3, 5], [1, 5])).toThrowError(TypeError);
      expect(add([3, 5], 1)).toThrowError(TypeError);
      expect(add(1, [3, 5])).toThrowError(TypeError);

      expect(add([3, 5], [1])).toThrowError(TypeError);
      expect(add([3], [1, 5])).toThrowError(TypeError);
    });
  });
});
