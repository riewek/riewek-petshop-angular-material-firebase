import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Dashboard } from './dashboard/dashboard';
import { Animals } from './animals/animals';
import { Shelters } from './shelters/shelters';
import { Adopters } from './adopters/adopters';
import { Adoptions } from './adoptions/adoptions';
import { Health } from './health/health';
import { Settings } from './settings/settings';
import { Reports } from './reports/reports';
import { About } from './about/about';
import { Register } from './register/register';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Assignments } from './assignments/assignments';

export const routes: Routes = [
  {
    path: 'demo',
    component: Demo,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'logout',
    component: Logout,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'animals',
    component: Animals,
  },
  {
    path: 'shelters',
    component: Shelters,
  },
  {
    path: 'adopters',
    component: Adopters,
  },
  {
    path: 'assignments',
    component: Assignments,
  },
  {
    path: 'adoptions',
    component: Adoptions,
  },
  {
    path: 'health',
    component: Health,
  },
  {
    path: 'reports',
    component: Reports,
  },
  {
    path: 'settings',
    component: Settings,
  },
  {
    path: 'about',
    component: About,
  },
];
