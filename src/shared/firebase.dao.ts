import { FirebaseEntity } from './firebase.model';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  getDocs,
  query,
  limit,
  deleteDoc,
  getDoc,
  getCountFromServer,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export class FirebaseDao<T extends FirebaseEntity> {
  constructor(public firestore: Firestore, public collectionName: string) {}

  private getColRef() {
    return collection(this.firestore, this.collectionName);
  }

  async empty(): Promise<boolean> {
    const snapshot = await getDocs(query(this.getColRef(), limit(1)));
    return snapshot.empty;
  }

  async size(): Promise<number> {
    const q = query(this.getColRef());
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }

  findAllAsObservable(): Observable<T[]> {
    return collectionData(this.getColRef(), { idField: 'id' }) as Observable<T[]>;
  }

  async find(id: string): Promise<T | null> {
    const itemDoc = doc(this.firestore, this.collectionName, id);
    const snapshot = await getDoc(itemDoc);
    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() } as T;
    return null;
  }

  save(e: T): Promise<void> {
    const colRef = this.getColRef();
    if (!e.id) e.id = doc(colRef).id;
    return setDoc(doc(colRef, e.id), e);
  }

  async remove(id: string): Promise<void> {
    await deleteDoc(doc(this.getColRef(), id));
  }
}
