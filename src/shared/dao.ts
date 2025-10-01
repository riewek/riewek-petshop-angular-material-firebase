import { Observable } from 'rxjs';
import { FirebaseEntity } from './firebase.model';

export interface Dao<T extends FirebaseEntity> {
  empty(): Promise<boolean>;
  size(): Promise<number>;
  findAllAsObservable(): Observable<T[]>;
  find(id: string): Promise<T | null>;
  save(e: T): Promise<void>;
  remove(id: string): Promise<void>;
}
