import { Item } from './item';

describe('shelter', () => {
  it('should create an item', () => {
    const shelter: Item = {
      id: 'A',
      value: 'B',
    };
    expect(shelter).toBeTruthy();
    expect(shelter.id).toBe('A');
    expect(shelter.value).toBe('B');
  });
});
