import { FirebaseEntity } from './firebase.model';
import { Observable, of } from 'rxjs';
import { Dao } from './dao';

export abstract class FakeDataDao<T extends FirebaseEntity> implements Dao<T> {
  constructor(private data: T[]) {}

  async empty(): Promise<boolean> {
    return this.data.length === 0;
  }

  async size(): Promise<number> {
    return this.data.length;
  }

  findAllAsObservable(): Observable<T[]> {
    return of(this.data);
  }

  async find(id: string): Promise<T | null> {
    const result = this.data.find((e) => e.id === id);
    if (result) return Promise.resolve(result);
    return null;
  }

  save(e: T): Promise<void> {
    this.data.push(e);
    return Promise.resolve();
  }

  async remove(id: string): Promise<void> {
    this.data = this.data.filter((e) => e.id !== id);
    return Promise.resolve();
  }
}
