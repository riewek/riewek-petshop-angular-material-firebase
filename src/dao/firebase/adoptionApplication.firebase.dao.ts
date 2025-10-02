import { Injectable } from '@angular/core';
import { FirebaseDao } from '../../shared/firebase.dao';
import {
  Firestore,
  FirestoreDataConverter,
  serverTimestamp,
  Timestamp,
} from '@angular/fire/firestore';
import { AdoptionApplication } from '../../model/adoptionApplication';

export const adoptionApplicationConverter: FirestoreDataConverter<AdoptionApplication> = {
  toFirestore(entity: AdoptionApplication) {
    const { id, createdAt, ...rest } = entity;
    return {
      ...rest,
      createdAt: createdAt ?? serverTimestamp(),
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)! as Omit<AdoptionApplication, 'id' | 'createdAt'> & {
      createdAt?: Timestamp;
    };
    return {
      id: snapshot.id,
      ...data,
      createdAt: data.createdAt?.toDate() ?? new Date(),
    };
  },
};

@Injectable({
  providedIn: 'root',
})
export class AdoptionApplicationFirebaseDao extends FirebaseDao<AdoptionApplication> {
  constructor(firestore: Firestore) {
    super(firestore, 'adoptionApplications', adoptionApplicationConverter);
  }
}
