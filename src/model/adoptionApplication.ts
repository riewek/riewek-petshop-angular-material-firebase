import { FirebaseEntity } from '../shared/firebase.model';

export interface AdoptionApplication extends FirebaseEntity {
  adopterId: string;
  animalId: string;
  createdAt: Date;
  status: 'submitted' | 'screening' | 'reserved' | 'approved' | 'rejected';
}
