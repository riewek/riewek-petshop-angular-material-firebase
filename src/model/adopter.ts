import { FirebaseEntity } from '../shared/firebase.model';

export interface Adopter extends FirebaseEntity {
  name: string;
  contact: string;
  address: string;
  housing: string;
  experience: string;
}

export function filterAdopter(adopter: Adopter, term: string): boolean {
  return (
    adopter.name.toLowerCase().includes(term) ||
    adopter.contact.toLowerCase().includes(term) ||
    adopter.address.toLowerCase().includes(term) ||
    adopter.housing.toLowerCase().includes(term) ||
    adopter.experience.toLowerCase().includes(term)
  );
}
