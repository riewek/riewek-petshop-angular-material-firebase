import { Injectable } from '@angular/core';
import { createFirestoreConverter, FirebaseDao } from '../../shared/firebase.dao';
import { Firestore } from '@angular/fire/firestore';
import { Item } from '../../app/services/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class ItemFirebaseDao extends FirebaseDao<Item> {
  constructor(firestore: Firestore) {
    super(firestore, 'items', createFirestoreConverter());
  }
}
