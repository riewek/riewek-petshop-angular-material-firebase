import { FirebaseEntity } from '../shared/firebase.model';

export interface Shelter extends FirebaseEntity {
  name: string;
  location: string;
  enclosureIds: string[];
}
