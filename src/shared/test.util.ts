// DummyComponent für RouterTestingModule
import { expect } from '@jest/globals';
import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

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
