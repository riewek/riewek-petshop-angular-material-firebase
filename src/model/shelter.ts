import { FirebaseEntity } from '../shared/firebase.model';

export interface Shelter extends FirebaseEntity {
  name: string;
  location: string;
  enclosureIds: string[];
}

export function filterShelter(shelter: Shelter, term: string): boolean {
  return shelter.name.toLowerCase().includes(term) || shelter.location.toLowerCase().includes(term);
}
