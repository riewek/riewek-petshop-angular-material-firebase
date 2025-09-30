import { Injectable } from '@angular/core';
import { FirebaseDao } from '../shared/firebase.dao';
import { Firestore } from '@angular/fire/firestore';
import { AdoptionContract } from '../model/adoptionContract';

@Injectable({
  providedIn: 'root',
})
export class AdoptionContractFirebaseDao extends FirebaseDao<AdoptionContract> {
  constructor(firestore: Firestore) {
    super(firestore, 'adoptionContracts');
  }
}
