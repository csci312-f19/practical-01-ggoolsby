/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');

describe('Determine age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    _Date = Date;
  });
  afterAll(() => {
    Date = _Date;
  });
  beforeEach(() => {
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 1 if birthday is 01 Jan 2017', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Returns 1 if birthday is 15 Dec 2016', () => {
    expect(birthday.howOld(new Date('15 Dec 2016'))).toBe(1);
  });

  test('Returns 1 if birthday is 15 Jan 2017', () => {
    expect(birthday.howOld(new Date('15 Jan 2017'))).toBe(0);
  });

  test('Returns 0 if birthday is 15 Sep 2017', () => {
    expect(birthday.howOld(new Date('15 Sep 2017'))).toBe(0);
  });

  test('Returns -1 if birthday is 01 Jan 2019', () => {
    expect(birthday.howOld(new Date('01 Jan 2019'))).toBe(-1);
  });
});
