import { FirebaseEntity } from '../shared/firebase.model';

export type HealthRecordType = 'checkup' | 'vaccination' | 'injury';

export interface AnimalHealth extends FirebaseEntity {
  animalId: string;
  date: Date;
  type: HealthRecordType;
  notes: string;
  vet?: string;
  meds?: string[];
}
