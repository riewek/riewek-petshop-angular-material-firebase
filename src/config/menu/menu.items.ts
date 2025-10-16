import { defaultMenuItems, MenuItem } from '../../shared/menu';
import { getValue } from '../../shared/utils';

//FIXME: Verwoben mit den Modellen, Routes, Guards und Translations (Name und Icon)
export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
    needsLogin: true,
    needsAdmin: false,
    screens: true,
  },
  {
    title: 'model.animal.many',
    icon: getValue('model.animal.icon'),
    route: '/animals',
    needsLogin: true,
    needsAdmin: false,
    screens: true,
  },
  {
    title: 'model.shelter.many',
    icon: getValue('model.shelter.icon'),
    route: '/shelters',
    needsLogin: true,
    needsAdmin: true,
    screens: true,
  },
  {
    title: 'model.enclosure.many',
    icon: getValue('model.enclosure.icon'),
    route: '/enclosures',
    needsLogin: true,
    needsAdmin: true,
    screens: true,
  },
  {
    title: 'model.adopter.many',
    icon: getValue('model.adopter.icon'),
    route: '/adopters',
    needsLogin: true,
    needsAdmin: true,
    screens: true,
  },
  {
    title: 'model.adoptionApplication.many',
    icon: getValue('model.adoptionApplication.icon'),
    route: '/adoptionApplications',
    needsLogin: true,
    needsAdmin: true,
    screens: true,
  },
  {
    title: 'model.adoptionContract.many',
    icon: getValue('model.adoptionContract.icon'),
    route: '/adoptionContracts',
    needsLogin: true,
    needsAdmin: true,
    screens: true,
  },
  {
    title: 'model.animalHealth.many',
    icon: getValue('model.animalHealth.icon'),
    route: '/animalHealths',
    needsLogin: true,
    needsAdmin: true,
    screens: true,
  },
  ...defaultMenuItems,
];
