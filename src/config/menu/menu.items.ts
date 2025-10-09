import { createMenuItem, MenuItem } from '../../shared/menu';

export const dashboardMenuItem = createMenuItem('Dashboard', 'dashboard', '/dashboard', true);
export const animalsMenuItem = createMenuItem('Tiere', 'pets', '/animals', true);
export const sheltersMenuItem = createMenuItem('Tierheime', 'home', '/shelters', true);
export const enclosuresMenuItem = createMenuItem('Gehege', 'home', '/enclosures', true);
export const adoptersMenuItem = createMenuItem('Interessenten', 'groups', '/adopters', true);
export const adoptionApplicationsMenuItem = createMenuItem(
  'Anträge',
  'assignment',
  '/adoptionApplications',
  true
);
export const adoptionContractsMenuItem = createMenuItem(
  'Verträge',
  'favorite',
  '/adoptionContracts',
  true
);
export const healthMenuItem = createMenuItem(
  'Gesundheitsreports',
  'local_hospital',
  '/animalHealths',
  true
);
export const reportsMenuItem = createMenuItem('Reporting', 'bar_chart', '/reports', true);
export const settingsMenuItem = createMenuItem('Einstellungen', 'settings', '/settings', true);
export const registerMenuItem = createMenuItem('Register', 'person_add', '/register', false, false);
export const loginMenuItem = createMenuItem('Login', 'login', '/login', false, false);
export const logoutMenuItem = createMenuItem('Logout', 'logout', '/logout', true, false);
export const aboutMenuItem = createMenuItem('About', 'info', '/about', false, false);
export const demoMenuItem = createMenuItem('Demos', 'smart_toy', '/demo', true, false);

export const menuItems: MenuItem[] = [
  dashboardMenuItem,
  animalsMenuItem,
  sheltersMenuItem,
  enclosuresMenuItem,
  adoptersMenuItem,
  adoptionApplicationsMenuItem,
  adoptionContractsMenuItem,
  healthMenuItem,
  reportsMenuItem,
  settingsMenuItem,
  registerMenuItem,
  loginMenuItem,
  logoutMenuItem,
  aboutMenuItem,
  demoMenuItem,
];
