import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Dashboard } from './dashboard/dashboard';
import { Animals } from './animals/animals';
import { Shelters } from './shelters/shelters';
import { Adopters } from './adopters/adopters';
import { AdoptionContracts as AdoptionContracts } from './adoptionContracts/adoptionContracts';
import { AnimalHealths as AnimalHealths } from './animalHealths/animalHealths';
import { Settings } from './settings/settings';
import { Reports } from './reports/reports';
import { About } from './about/about';
import { Register } from './register/register';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { AdoptionApplications as AdoptionApplications } from './adoptionApplications/adoptionApplications';
import { Enclosures } from './enclosures/enclosures';

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
    path: 'enclosures',
    component: Enclosures,
  },
  {
    path: 'adopters',
    component: Adopters,
  },
  {
    path: 'adoptionApplications',
    component: AdoptionApplications,
  },
  {
    path: 'adoptionContracts',
    component: AdoptionContracts,
  },
  {
    path: 'animalHealths',
    component: AnimalHealths,
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
