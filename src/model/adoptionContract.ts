import { FirebaseEntity } from '../shared/firebase.model';

export interface AdoptionContract extends FirebaseEntity {
  adoptionApplicationId: string;
  contractUrl?: string;
  signedAt?: Date;
  fee: number;
}
