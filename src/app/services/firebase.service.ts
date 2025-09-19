import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Item {
  id?: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private angularFirestore: AngularFirestore) {}

  getItems(): Observable<Item[]> {
    return this.angularFirestore.collection<Item>('items').valueChanges({ idField: 'id' });
  }
}
