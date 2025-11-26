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

export function filterAnimalHealth(animalHealth: AnimalHealth, term: string): boolean {
  return (
    animalHealth.animalId.toLowerCase().includes(term) ||
    animalHealth.type.toLowerCase().includes(term) ||
    animalHealth.notes.toLowerCase().includes(term)
  );
}
