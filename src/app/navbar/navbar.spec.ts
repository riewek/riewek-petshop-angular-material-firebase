import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { menuItems } from '../../config/menu/menu.items';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Navbar,
        RouterTestingModule.withRoutes(
          menuItems.map((item) => ({
            // remove leading slash
            path: item.route.replace(/^\//, ''),
            component: DummyComponent,
          }))
        ),
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  menuItems
    .filter((item) => !item.screens)
    .forEach((item) => {
      it(`not screen menus should navigate to ${item.title} when clicked`, async () => {
        const link = Array.from(fixture.nativeElement.querySelectorAll('a')).find((el) =>
          (el as HTMLElement).textContent?.includes(item.title)
        ) as HTMLAnchorElement;
        expect(link).toBeTruthy();
        link.click();
        fixture.detectChanges();
        // Warte bis die Navigation abgeschlossen ist
        await fixture.whenStable();
        expect(router.url).toBe(item.route);
      });
    });
});

// DummyComponent für RouterTestingModule
import { Component } from '@angular/core';
@Component({ template: '' })
class DummyComponent {}
