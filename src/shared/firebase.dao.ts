import { FirebaseEntity } from './firebase.model';
import {
  Firestore,
  FirestoreDataConverter,
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
  Timestamp,
  QueryDocumentSnapshot,
  SnapshotOptions,
  serverTimestamp,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Dao } from './dao';

function isDate(value: any): value is Date {
  return value instanceof Date;
}

/**
 * automatische Konvertierung nach Date
 *
 * @returns
 */
export function createFirestoreConverterDate<
  T extends FirebaseEntity
>(): FirestoreDataConverter<T> {
  return {
    toFirestore(entity: T): any {
      const { id, ...rest } = entity;

      const converted: any = {};
      for (const [key, value] of Object.entries(rest)) {
        if (isDate(value)) {
          converted[key] = Timestamp.fromDate(value);
        } else {
          converted[key] = value;
        }
      }

      // Optional: Fallback für createdAt / updatedAt
      if ('createdAt' in rest && !rest['createdAt']) {
        converted['createdAt'] = serverTimestamp();
      }

      return converted;
    },

    fromFirestore(snapshot: QueryDocumentSnapshot<T>, options: SnapshotOptions): T {
      const data = snapshot.data(options)!;
      const converted: any = {};

      for (const [key, value] of Object.entries(data)) {
        if (value instanceof Timestamp) {
          converted[key] = value.toDate();
        } else {
          converted[key] = value;
        }
      }

      return {
        id: snapshot.id,
        ...converted,
      } as T;
    },
  };
}

export function createFirestoreConverter<T extends FirebaseEntity>(): FirestoreDataConverter<T> {
  return {
    toFirestore(entity: T) {
      const { id, ...rest } = entity; // id nicht in Firestore speichern
      return rest as any;
    },
    fromFirestore(snapshot: QueryDocumentSnapshot<T>, options: SnapshotOptions) {
      const data = snapshot.data(options)!;
      return {
        id: snapshot.id,
        ...data,
      } as T;
    },
  };
}

export abstract class FirebaseDao<T extends FirebaseEntity> implements Dao<T> {
  constructor(
    public firestore: Firestore,
    public collectionName: string,
    public converter: FirestoreDataConverter<T>
  ) {}

  private getColRef() {
    return collection(this.firestore, this.collectionName).withConverter(this.converter);
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
