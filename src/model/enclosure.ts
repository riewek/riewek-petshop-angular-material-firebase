import { FirebaseEntity } from '../shared/firebase.model';

export type EnclosureType = 'indoor' | 'outdoor';

export interface Enclosure extends FirebaseEntity {
  name: string;
  type: EnclosureType;
  capacity: number;
  occupied: number;
  notes?: string;
}
