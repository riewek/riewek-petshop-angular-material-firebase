import { Injectable } from '@angular/core';
import { FirebaseDao } from '../shared/firebase.dao';
import { Firestore } from '@angular/fire/firestore';
import { AnimalHealth } from '../model/animalHealth';

@Injectable({
  providedIn: 'root',
})
export class AnimalHealthFirebaseDao extends FirebaseDao<AnimalHealth> {
  constructor(firestore: Firestore) {
    super(firestore, 'animalHealths');
  }
}
