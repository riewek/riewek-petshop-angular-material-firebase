import { FirebaseEntity } from '../shared/firebase.model';

export type AnimalHealthType = 'checkup' | 'vaccination' | 'injury';

export interface AnimalHealth extends FirebaseEntity {
  animalId: string;
  date: Date;
  type: AnimalHealthType;
  notes: string;
  vet?: string;
  meds?: string[];
}
