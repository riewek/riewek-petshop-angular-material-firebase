import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Dashboard } from './dashboard/dashboard';
import { Settings } from './settings/settings';
import { Reports } from './reports/reports';
import { About } from './about/about';
import { Register } from './register/register';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Animals } from './animals/animals';
import { Shelters } from './shelters/shelters';
import { Adopters } from './adopters/adopters';
import { AdoptionContracts as AdoptionContracts } from './adoptionContracts/adoptionContracts';
import { AnimalHealths as AnimalHealths } from './animalHealths/animalHealths';
import { AdoptionApplications as AdoptionApplications } from './adoptionApplications/adoptionApplications';
import { Enclosures } from './enclosures/enclosures';
import { AnimalDetail } from './animals/animal-detail/animal-detail';
import { ShelterDetail } from './shelters/shelter-detail/shelter-detail';
import { EnclosureDetail } from './enclosures/enclosure-detail/enclosure-detail';
import { AdopterDetail } from './adopters/adopter-detail/adopter-detail';
import { AdoptionApplicationDetail } from './adoptionApplications/adoption-application-detail/adoption-application-detail';
import { AdoptionContractDetail } from './adoptionContracts/adoption-contract-detail/adoption-contract-detail';
import { AnimalHealthDetail } from './animalHealths/animal-health-detail/animal-health-detail';
import { adminOnlyGuard, authGuard } from './services/firebase.guard';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'demo',
    component: Demo,
    canActivate: [authGuard, adminOnlyGuard],
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
    path: 'animals',
    component: Animals,
    canActivate: [authGuard],
  },
  {
    path: 'animals/:id',
    component: AnimalDetail,
    canActivate: [authGuard],
  },
  {
    path: 'shelters',
    component: Shelters,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'shelters/:id',
    component: ShelterDetail,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'enclosures',
    component: Enclosures,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'enclosures/:id',
    component: EnclosureDetail,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'adopters',
    component: Adopters,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'adopters/:id',
    component: AdopterDetail,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'adoptionApplications',
    component: AdoptionApplications,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'adoptionApplications/:id',
    component: AdoptionApplicationDetail,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'adoptionContracts',
    component: AdoptionContracts,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'adoptionContracts/:id',
    component: AdoptionContractDetail,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'animalHealths',
    component: AnimalHealths,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'animalHealths/:id',
    component: AnimalHealthDetail,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'reports',
    component: Reports,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'settings',
    component: Settings,
    canActivate: [authGuard, adminOnlyGuard],
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
