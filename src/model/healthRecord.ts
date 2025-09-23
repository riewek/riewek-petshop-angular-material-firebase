import { FirebaseEntity } from '../shared/firebase.model';

export interface HealthRecord extends FirebaseEntity {
  animalId: string;
  date: Date;
  type: 'checkup' | 'vaccination' | 'injury';
  notes: string;
  vet?: string;
  meds?: string[];
}
