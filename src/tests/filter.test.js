import filter from '../filter.js';

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
];

const result = [{ user: 'barney', active: true }];

describe('filter', () => {
  it('should return filtered array', () => {
    expect(filter(users, ({ active }) => active)).toStrictEqual(result);
  });
});
