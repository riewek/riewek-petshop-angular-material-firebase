import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { menuItems } from '../../config/menu/menu.items';
import { buttonAndClick, linkAndClick, DummyComponent } from '../../shared/test.util';

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

  menuItems.forEach((item) => {
    it(`menus should navigate to ${item.title} when clicked`, async () => {
      await buttonAndClick('menu', fixture);
      await linkAndClick(item.title, fixture);
      expect(router.url).toBe(item.route);
    });
  });

  menuItems
    .filter((item) => item.screens)
    .forEach((item) => {
      it(`screen menus should navigate to ${item.title} when clicked`, async () => {
        await linkAndClick('Screens', fixture);
        await linkAndClick(item.title, fixture);
        expect(router.url).toBe(item.route);
      });
    });

  menuItems
    .filter((item) => !item.screens)
    .forEach((item) => {
      it(`not screen menus should navigate to ${item.title} when clicked`, async () => {
        await linkAndClick(item.title, fixture);
        expect(router.url).toBe(item.route);
      });
    });
});
