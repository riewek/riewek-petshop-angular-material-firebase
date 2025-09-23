import { FirebaseEntity } from '../shared/firebase.model';

export type AdoptionApplicationStatus =
  | 'submitted'
  | 'screening'
  | 'reserved'
  | 'approved'
  | 'rejected';

export interface AdoptionApplication extends FirebaseEntity {
  adopterId: string;
  animalId: string;
  createdAt: Date;
  status: AdoptionApplicationStatus;
}
