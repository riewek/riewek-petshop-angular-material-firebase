import { FirebaseEntity } from '../shared/firebase.model';

export interface Item extends FirebaseEntity {
  value: string;
}
