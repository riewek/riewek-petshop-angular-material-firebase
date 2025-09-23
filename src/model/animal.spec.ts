import { Animal } from './animal';

describe('animal', () => {
  it('should create a animal', () => {
    const animal: Animal = {
      id: 'A',
      species: 'B',
      breed: 'C',
      birthDate: new Date('2023-01-15'),
      sex: 'male',
      intakeDate: new Date('2023-01-15'),
      healthStatus: 'Healthy',
      photos: ['D'],
      adoptable: true,
    };
    expect(animal).toBeTruthy();
    expect(animal.id).toBe('A');
    expect(animal.species).toBe('B');
    expect(animal.breed).toBe('C');
    expect(animal.birthDate instanceof Date).toBeTruthy();
    expect(animal.sex).toBe('male');
    expect(animal.intakeDate instanceof Date).toBeTruthy();
    expect(animal.healthStatus).toBe('Healthy');
    expect(animal.photos.length).toBe(1);
    expect(animal.photos[0]).toBe('D');
    expect(animal.adoptable).toBeTruthy();
  });
});
