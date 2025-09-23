import { FirebaseEntity } from '../shared/firebase.model';

export interface Enclosure extends FirebaseEntity {
  name: string;
  type: 'indoor' | 'outdoor';
  capacity: number;
  occupied: number;
  notes?: string;
}
