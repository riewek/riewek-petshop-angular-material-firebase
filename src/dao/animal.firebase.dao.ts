import { Injectable } from '@angular/core';
import { FirebaseDao } from '../shared/firebase.dao';
import { Animal } from '../model/animal';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AnimalFirebaseDao extends FirebaseDao<Animal> {
  constructor(firestore: Firestore) {
    super(firestore, 'animals');
  }
}
