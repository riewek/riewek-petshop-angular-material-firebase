import { FirebaseEntity } from '../shared/firebase.model';

export type AdoptionApplicationStatus =
  | 'submitted'
  | 'screening'
  | 'reserved'
  | 'approved'
  | 'rejected';

export interface AdoptionApplication extends FirebaseEntity {
  adopterId: string;
  animalId: string;
  createdAt: Date;
  status: AdoptionApplicationStatus;
}

export function filterAdoptionApplication(
  adoptionApplication: AdoptionApplication,
  term: string
): boolean {
  return (
    adoptionApplication.adopterId.toLowerCase().includes(term) ||
    adoptionApplication.animalId.toLowerCase().includes(term) ||
    adoptionApplication.status.toLowerCase().includes(term)
  );
}
