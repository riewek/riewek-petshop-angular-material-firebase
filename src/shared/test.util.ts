// DummyComponent für RouterTestingModule
import { vi, expect } from 'vitest';
import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { Auth } from '@angular/fire/auth';

@Component({ template: '' })
export class DummyComponent {}

export function buttonAndClick(name: string, fixture: ComponentFixture<any>) {
  const buttonMenu = Array.from(fixture.nativeElement.querySelectorAll('button')).find((el) =>
    (el as HTMLElement).textContent?.includes(name)
  ) as HTMLButtonElement;
  expect(buttonMenu).toBeTruthy();
  buttonMenu.click();
  fixture.detectChanges();
  return fixture.whenStable();
}

export function linkAndClick(name: string, fixture: ComponentFixture<any>) {
  const linkScreen = Array.from(fixture.nativeElement.querySelectorAll('a')).find((el) =>
    (el as HTMLElement).textContent?.includes(name)
  ) as HTMLAnchorElement;
  expect(linkScreen).toBeTruthy();
  linkScreen.click();
  fixture.detectChanges();
  return fixture.whenStable();
}

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseEntity } from './firebase.model';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of({}); // Gibt leere Übersetzungen zurück
  }
}

export function translatePipeMock(): any {
  return TranslateModule.forRoot({
    loader: { provide: TranslateLoader, useClass: FakeLoader },
  });
}

export function daoMock(): any {
  return {
    findAllAsObservable: () => of([]),
    find: (id: string) => Promise.resolve(null),
    empty: () => Promise.resolve(true),
    size: () => Promise.resolve(0),
    save: (e: FirebaseEntity) => Promise.resolve(),
    remove: (id: string) => Promise.resolve(),
  };
}

export function activatedRouteMock(): any {
  return {
    provide: ActivatedRoute,
    useValue: {
      paramMap: of({ get: (key: string) => '123' }), // simuliert z.B. /adopters/123
      snapshot: { paramMap: { get: (key: string) => '123' } },
    },
  };
}

export const authMock = {
  onAuthStateChanged: vi.fn((callback: (user: any) => void) => {
    callback(null);
    return () => {};
  }),
  currentUser: null,
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
};

export function authMockProvider() {
  return { provide: Auth, useValue: authMock };
}