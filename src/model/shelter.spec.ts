import { Shelter } from './shelter';

describe('shelter', () => {
  it('should create a shelter', () => {
    const shelter: Shelter = {
      id: 'A',
      name: 'B',
      location: 'C',
      enclosureIds: ['D'],
    };
    expect(shelter).toBeTruthy();
    expect(shelter.id).toBe('A');
    expect(shelter.name).toBe('B');
    expect(shelter.location).toBe('C');
    expect(shelter.enclosureIds).toEqual(['D']);
  });
});
