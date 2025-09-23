import { HealthRecord } from './healthRecord';

describe('healthRecord', () => {
  it('should create a healthRecord', () => {
    const healthRecord: HealthRecord = {
      id: 'A',
      animalId: 'B',
      date: new Date('2023-09-23'),
      type: 'checkup',
      notes: 'C',
      vet: 'D',
      meds: ['E'],
    };
    expect(healthRecord).toBeTruthy();
    expect(healthRecord.id).toBe('A');
    expect(healthRecord.animalId).toBe('B');
    expect(healthRecord.date instanceof Date).toBeTruthy();
    expect(healthRecord.type).toBe('checkup');
    expect(healthRecord.notes).toBe('C');
    expect(healthRecord.vet).toBe('D');
    expect(healthRecord.meds).toEqual(['E']);
  });
});
