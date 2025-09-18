import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';

const production = false;
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'petshop-firebase-3a57b',
        appId: '1:186260124661:web:1ec0334ee9f652097ae6bc',
        storageBucket: 'petshop-firebase-3a57b.firebasestorage.app',
        apiKey: 'AIzaSyBm64s_kkSRARY1dv4vBKzMNmMlq2_Ucuo',
        authDomain: 'petshop-firebase-3a57b.firebaseapp.com',
        messagingSenderId: '186260124661',
      })
    ),
    provideAuth(() => {
      const auth = getAuth();
      if (!production) {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (!production) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),
  ],
};
