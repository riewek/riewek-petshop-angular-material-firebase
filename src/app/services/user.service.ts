import { Injectable, signal } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuItem } from '../../shared/menu';

export interface UserRoles {
  admin?: boolean;
  adopter?: string;
}

//FIXME: https://angular-university.io/lesson/angularfire-user-service-authentication-adapting-the-ui
@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = signal<boolean>(false);
  isLoggedOut = signal<boolean>(true);
  pictureUrl = signal<string>('');
  roles = signal<UserRoles>({});

  constructor(private auth: Auth, private router: Router) {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isLoggedIn.set(true);
        this.isLoggedOut.set(false);
        this.pictureUrl.set(user.photoURL!);
        const idTokenResult = await user.getIdTokenResult();
        this.roles.set(idTokenResult.claims as UserRoles);
      } else {
        this.isLoggedIn.set(false);
        this.isLoggedOut.set(true);
        this.pictureUrl.set('');
        this.roles.set({});
      }
    });
  }

  canSee(menuItem: MenuItem): boolean {
    const loggedIn = this.isLoggedIn();
    const isAdmin = this.roles().admin;
    // Wenn Item Login verlangt, muss der User eingeloggt sein
    if (menuItem.needsLogin && !loggedIn) return false;
    // Wenn Item Admin verlangt, muss der User Admin sein
    if (menuItem.needsAdmin && !isAdmin) return false;
    // Wenn kein Einloggen benötigt wird und der User eingelogged ist
    if (!menuItem.needsLogin && loggedIn) return false;
    // Sonst darf er es sehen
    return true;
  }

  //FIXME: Rollen Rechte
  isAdmin(): boolean {
    return this.roles().admin ?? false;
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
