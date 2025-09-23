// DummyComponent für RouterTestingModule
import { expect } from '@jest/globals';
import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { isAwaitKeyword } from 'typescript';
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
