import { FirebaseEntity } from '../shared/firebase.model';

export type AnimalSex = 'male' | 'female' | 'unknown';

export type AnimalHealthStatus = 'Healthy' | 'Warning' | 'Critical' | 'Unknown';

export interface Animal extends FirebaseEntity {
  species: string;
  breed: string;
  birthDate: Date;
  sex: AnimalSex;
  intakeDate: Date;
  healthStatus: AnimalHealthStatus;
  enclosureId?: string;
  photos: string[];
  adoptable: boolean;
}
