import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';
import { from, map, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  return user(auth).pipe(map((user) => (user ? true : router.createUrlTree(['/login']))));
};

export const adminOnlyGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return user(auth).pipe(
    switchMap((user) => {
      // kein Redirect hier – authGuard kümmert sich darum
      if (!user) return [false];
      return from(user.getIdTokenResult()).pipe(
        map((token) => {
          const isAdmin = !!token.claims['admin'];
          return isAdmin ? true : router.createUrlTree(['/dashboard']);
        })
      );
    })
  );
};
