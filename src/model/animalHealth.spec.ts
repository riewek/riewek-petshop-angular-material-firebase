import { AnimalHealth } from './animalHealth';

describe('animalHealth', () => {
  it('should create a animalHealth', () => {
    const animalHealth: AnimalHealth = {
      id: 'A',
      animalId: 'B',
      date: new Date('2023-09-23'),
      type: 'checkup',
      notes: 'C',
      vet: 'D',
      meds: ['E'],
    };
    expect(animalHealth).toBeTruthy();
    expect(animalHealth.id).toBe('A');
    expect(animalHealth.animalId).toBe('B');
    expect(animalHealth.date instanceof Date).toBeTruthy();
    expect(animalHealth.type).toBe('checkup');
    expect(animalHealth.notes).toBe('C');
    expect(animalHealth.vet).toBe('D');
    expect(animalHealth.meds).toEqual(['E']);
  });
});
