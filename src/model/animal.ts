import { FirebaseEntity } from '../shared/firebase.model';

export interface Animal extends FirebaseEntity {
  species: string;
  breed: string;
  birthDate: Date;
  sex: 'male' | 'female' | 'unknown';
  intakeDate: Date;
  healthStatus: string;
  enclosureId?: string;
  photos: string[];
  adoptable: boolean;
}
