import { FirebaseEntity } from '../shared/firebase.model';

export type EnclosureType = 'indoor' | 'outdoor';

export interface Enclosure extends FirebaseEntity {
  name: string;
  type: EnclosureType;
  capacity: number;
  occupied: number;
  notes?: string;
}

export function filterEnclosure(enclosure: Enclosure, term: string): boolean {
  return enclosure.name.toLowerCase().includes(term) || enclosure.type.toLowerCase().includes(term);
}
