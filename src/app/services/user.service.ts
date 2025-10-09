import { Injectable, signal } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

export interface UserRoles {
  admin?: boolean;
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
        console.log('user');
        console.log(user);
        this.isLoggedIn.set(true);
        this.isLoggedOut.set(false);
        this.pictureUrl.set(user.photoURL!);
        const idTokenResult = await user.getIdTokenResult();
        this.roles.set(idTokenResult.claims as UserRoles);
      } else {
        console.log('nouser');
        this.isLoggedIn.set(false);
        this.isLoggedOut.set(true);
        this.pictureUrl.set('');
        this.roles.set({});
      }
    });
  }

  canSee(needsLogin: boolean): boolean {
    return needsLogin === this.isLoggedIn();
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
