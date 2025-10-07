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

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
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
    path: 'animals',
    component: Animals,
  },
  {
    path: 'animals/:id',
    component: AnimalDetail,
  },
  {
    path: 'shelters',
    component: Shelters,
  },
  {
    path: 'shelters/:id',
    component: ShelterDetail,
  },
  {
    path: 'enclosures',
    component: Enclosures,
  },
  {
    path: 'enclosures/:id',
    component: EnclosureDetail,
  },
  {
    path: 'adopters',
    component: Adopters,
  },
  {
    path: 'adopters/:id',
    component: AdopterDetail,
  },
  {
    path: 'adoptionApplications',
    component: AdoptionApplications,
  },
  {
    path: 'adoptionApplications/:id',
    component: AdoptionApplicationDetail,
  },
  {
    path: 'adoptionContracts',
    component: AdoptionContracts,
  },
  {
    path: 'adoptionContracts/:id',
    component: AdoptionContractDetail,
  },
  {
    path: 'animalHealths',
    component: AnimalHealths,
  },
  {
    path: 'animalHealths/:id',
    component: AnimalHealthDetail,
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
  {
    path: '**',
    redirectTo: '/',
  },
];
