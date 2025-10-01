import { Injectable } from '@angular/core';
import { FirebaseDao } from '../shared/firebase.dao';
import {
  Firestore,
  FirestoreDataConverter,
  serverTimestamp,
  Timestamp,
} from '@angular/fire/firestore';
import { AnimalHealth } from '../model/animalHealth';

export const animalHealthConverter: FirestoreDataConverter<AnimalHealth> = {
  toFirestore(health: AnimalHealth) {
    const { id, date, ...rest } = health;
    return {
      ...rest,
      date: date ? Timestamp.fromDate(date) : serverTimestamp(),
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)! as Omit<AnimalHealth, 'id' | 'date'> & {
      date?: Timestamp;
    };
    return {
      id: snapshot.id,
      ...data,
      date: data.date?.toDate() ?? new Date(),
    };
  },
};

@Injectable({
  providedIn: 'root',
})
export class AnimalHealthFirebaseDao extends FirebaseDao<AnimalHealth> {
  constructor(firestore: Firestore) {
    super(firestore, 'animalHealths', animalHealthConverter);
  }
}
