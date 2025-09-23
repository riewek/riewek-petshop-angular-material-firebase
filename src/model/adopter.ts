import { FirebaseEntity } from '../shared/firebase.model';

export interface Adopter extends FirebaseEntity {
  id: string;
  name: string;
  contact: string;
  address: string;
  housing: string;
  experience: string;
}
