import { Enclosure } from './enclosure';

describe('enclosure', () => {
  it('should create a enclosure', () => {
    const enclosure: Enclosure = {
      id: 'A',
      name: 'B',
      type: 'indoor',
      capacity: 1,
      occupied: 2,
      notes: 'C',
    };
    expect(enclosure).toBeTruthy();
    expect(enclosure.id).toBe('A');
    expect(enclosure.name).toBe('B');
    expect(enclosure.type).toBe('indoor');
    expect(enclosure.capacity).toBe(1);
    expect(enclosure.occupied).toBe(2);
    expect(enclosure.notes).toBe('C');
  });
});
