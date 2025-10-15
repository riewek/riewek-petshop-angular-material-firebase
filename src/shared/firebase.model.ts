export interface FirebaseEntity {
  id?: string;
}

export function find<T extends FirebaseEntity>(values: T[], id: string): T | undefined {
  return values.find((e) => e.id === id);
}
