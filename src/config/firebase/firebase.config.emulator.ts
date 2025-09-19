import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { firebaseConfig } from './firebase.props';
import { importProvidersFrom } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const firebaseProviders = [
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => {
    const db = getFirestore();
    connectFirestoreEmulator(db, 'localhost', 8080);
    return db;
  }),
  provideAuth(() => {
    const auth = getAuth();
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    return auth;
  }),
  importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule),
];
