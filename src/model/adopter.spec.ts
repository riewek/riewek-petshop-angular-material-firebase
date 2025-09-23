import { Adopter } from './adopter';

describe('adopter', () => {
  it('should create a adopter', () => {
    const adopter: Adopter = {
      id: 'A',
      name: 'B',
      contact: 'C',
      address: 'D',
      housing: 'E',
      experience: 'F',
    };
    expect(adopter).toBeTruthy();
    expect(adopter.id).toBe('A');
    expect(adopter.name).toBe('B');
    expect(adopter.contact).toBe('C');
    expect(adopter.address).toBe('D');
    expect(adopter.housing).toBe('E');
    expect(adopter.experience).toBe('F');
  });
});
