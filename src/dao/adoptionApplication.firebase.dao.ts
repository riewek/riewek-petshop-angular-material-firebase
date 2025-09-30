import { Injectable } from '@angular/core';
import { FirebaseDao } from '../shared/firebase.dao';
import { Firestore } from '@angular/fire/firestore';
import { AdoptionApplication } from '../model/adoptionApplication';

@Injectable({
  providedIn: 'root',
})
export class AdoptionApplicationFirebaseDao extends FirebaseDao<AdoptionApplication> {
  constructor(firestore: Firestore) {
    super(firestore, 'adoptionApplications');
  }
}
