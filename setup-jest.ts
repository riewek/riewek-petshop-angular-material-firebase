import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv();

//Problems with fetch
jest.mock('@angular/fire/auth', () => ({ Auth: jest.fn() }));
jest.mock('@angular/fire/firestore', () => ({
  Firestore: jest.fn(),
  collection: jest.fn(),
  collectionData: jest.fn().mockReturnValue({ subscribe: jest.fn() }),
  doc: jest.fn(),
  setDoc: jest.fn(),
  getDocs: jest.fn(),
  query: jest.fn(),
  limit: jest.fn(),
  deleteDoc: jest.fn(),
  getDoc: jest.fn(),
  getCountFromServer: jest.fn(),
  Timestamp: { fromDate: jest.fn(), now: jest.fn() },
  serverTimestamp: jest.fn(),
}));
