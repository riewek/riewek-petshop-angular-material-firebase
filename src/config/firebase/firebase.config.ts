import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { firebaseConfig } from './firebase.props';
import { importProvidersFrom } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const firebaseProviders = [
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth()),
  importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule),
];
