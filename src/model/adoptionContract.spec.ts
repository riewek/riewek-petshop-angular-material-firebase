import { AdoptionContract } from './adoptionContract';

describe('adoptionContract', () => {
  it('should create a adoptionContract', () => {
    const adoptionContract: AdoptionContract = {
      id: 'A',
      adoptionApplicationId: 'B',
      contractUrl: 'C',
      signedAt: new Date('2023-09-23'),
      fee: 150,
    };

    expect(adoptionContract).toBeTruthy();
    expect(adoptionContract.id).toBe('A');
    expect(adoptionContract.adoptionApplicationId).toBe('B');
    expect(adoptionContract.contractUrl).toBe('C');
    expect(adoptionContract.signedAt instanceof Date).toBeTruthy();
    expect(adoptionContract.fee).toBe(150);
  });
});
