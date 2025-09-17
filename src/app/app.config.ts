import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "petshop-firebase-3a57b", appId: "1:186260124661:web:1ec0334ee9f652097ae6bc", storageBucket: "petshop-firebase-3a57b.firebasestorage.app", apiKey: "AIzaSyBm64s_kkSRARY1dv4vBKzMNmMlq2_Ucuo", authDomain: "petshop-firebase-3a57b.firebaseapp.com", messagingSenderId: "186260124661" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
