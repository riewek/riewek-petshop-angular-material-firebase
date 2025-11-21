import { FirebaseEntity } from '../shared/firebase.model';

export interface Adopter extends FirebaseEntity {
  name: string;
  contact: string;
  address: string;
  housing: string;
  experience: string;
}
