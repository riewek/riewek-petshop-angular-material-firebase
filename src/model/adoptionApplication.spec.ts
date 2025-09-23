import { AdoptionApplication } from './adoptionApplication';

describe('adoptionApplication', () => {
  it('should create a adoptionApplication', () => {
    const adoptionApplication: AdoptionApplication = {
      id: 'A',
      adopterId: 'B',
      animalId: 'C',
      createdAt: new Date('2023-09-23'),
      status: 'submitted',
    };
    expect(adoptionApplication).toBeTruthy();
    expect(adoptionApplication.id).toBe('A');
    expect(adoptionApplication.adopterId).toBe('B');
    expect(adoptionApplication.animalId).toBe('C');
    expect(adoptionApplication.createdAt instanceof Date).toBeTruthy();
    expect(adoptionApplication.status).toBe('submitted');
  });
});
