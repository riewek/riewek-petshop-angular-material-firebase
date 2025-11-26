import { FirebaseEntity } from '../shared/firebase.model';

export interface Item extends FirebaseEntity {
  value: string;
}

export function filterItem(item: Item, term: string): boolean {
  return item.value.toLowerCase().includes(term);
}
