import { Injectable } from '@angular/core';
import { FirebaseDao } from '../../shared/firebase.dao';
import { Animal } from '../../model/animal';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreDataConverter, Timestamp, serverTimestamp } from '@angular/fire/firestore';

export const animalConverter: FirestoreDataConverter<Animal> = {
  toFirestore(animal: Animal) {
    const { id, birthDate, intakeDate, ...rest } = animal;
    return {
      ...rest,
      birthDate: birthDate ? Timestamp.fromDate(birthDate) : null,
      intakeDate: intakeDate ? Timestamp.fromDate(intakeDate) : serverTimestamp(),
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)! as Omit<Animal, 'id' | 'birthDate' | 'intakeDate'> & {
      birthDate?: Timestamp;
      intakeDate?: Timestamp;
    };
    return {
      id: snapshot.id,
      ...data,
      birthDate: data.birthDate?.toDate() ?? new Date(),
      intakeDate: data.intakeDate?.toDate() ?? new Date(),
    };
  },
};

@Injectable({
  providedIn: 'root',
})
export class AnimalFirebaseDao extends FirebaseDao<Animal> {
  constructor(firestore: Firestore) {
    super(firestore, 'animals', animalConverter);
  }
}
