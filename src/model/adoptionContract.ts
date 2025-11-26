import { FirebaseEntity } from '../shared/firebase.model';

export interface AdoptionContract extends FirebaseEntity {
  adoptionApplicationId: string;
  contractUrl?: string;
  signedAt?: Date;
  fee: number;
}

export function filterAdoptionContract(adoptionContract: AdoptionContract, term: string): boolean {
  return adoptionContract.adoptionApplicationId.toLowerCase().includes(term);
}
