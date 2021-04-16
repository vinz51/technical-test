import { getInitials } from '../';

describe('getInitials', () => {
  it.each([
    ['', ''],
    ['bruce wayne', 'BW'],
    ['bruce wayne alias batman', 'BW'],
  ])('expects %s to be %s', (name, expected) => {
    expect(getInitials(name)).toEqual(expected);
  });
});
