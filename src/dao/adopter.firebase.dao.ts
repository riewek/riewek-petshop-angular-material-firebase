import { Injectable } from '@angular/core';
import { createFirestoreConverter, FirebaseDao } from '../shared/firebase.dao';
import { Firestore } from '@angular/fire/firestore';
import { Adopter } from '../model/adopter';

@Injectable({
  providedIn: 'root',
})
export class AdopterFirebaseDao extends FirebaseDao<Adopter> {
  constructor(firestore: Firestore) {
    super(firestore, 'adopters', createFirestoreConverter());
  }
}
