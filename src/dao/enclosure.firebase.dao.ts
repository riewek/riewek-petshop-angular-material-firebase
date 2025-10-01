import { Injectable } from '@angular/core';
import { createFirestoreConverter, FirebaseDao } from '../shared/firebase.dao';
import { Firestore } from '@angular/fire/firestore';
import { Enclosure } from '../model/enclosure';

@Injectable({
  providedIn: 'root',
})
export class EnclosureFirebaseDao extends FirebaseDao<Enclosure> {
  constructor(firestore: Firestore) {
    super(firestore, 'enclosures', createFirestoreConverter());
  }
}
