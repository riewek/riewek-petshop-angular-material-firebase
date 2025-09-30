import { Injectable } from '@angular/core';
import { FirebaseDao } from '../shared/firebase.dao';
import { Firestore } from '@angular/fire/firestore';
import { Shelter } from '../model/shelter';

@Injectable({
  providedIn: 'root',
})
export class ShelterFirebaseDao extends FirebaseDao<Shelter> {
  constructor(firestore: Firestore) {
    super(firestore, 'shelters');
  }
}
