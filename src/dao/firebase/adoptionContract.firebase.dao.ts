import { Injectable } from '@angular/core';
import { FirebaseDao } from '../../shared/firebase.dao';
import {
  Firestore,
  FirestoreDataConverter,
  serverTimestamp,
  Timestamp,
} from '@angular/fire/firestore';
import { AdoptionContract } from '../../model/adoptionContract';

export const adoptionContractConverter: FirestoreDataConverter<AdoptionContract> = {
  toFirestore(entity: AdoptionContract) {
    const { id, signedAt, ...rest } = entity;
    return {
      ...rest,
      createdAt: signedAt ?? serverTimestamp(),
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)! as Omit<AdoptionContract, 'id' | 'signedAt'> & {
      signedAt?: Timestamp;
    };
    return {
      id: snapshot.id,
      ...data,
      signedAt: data.signedAt?.toDate() ?? new Date(),
    };
  },
};

@Injectable({
  providedIn: 'root',
})
export class AdoptionContractFirebaseDao extends FirebaseDao<AdoptionContract> {
  constructor(firestore: Firestore) {
    super(firestore, 'adoptionContracts', adoptionContractConverter);
  }
}
