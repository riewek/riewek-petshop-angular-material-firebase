import { createMenuItem, MenuItem } from '../../shared/menu';

export const dashboardMenuItem = createMenuItem('Dashboard', 'dashboard', '/dashboard');
export const animalsMenuItem = createMenuItem('Tiere', 'pets', '/animals');
export const sheltersMenuItem = createMenuItem('Tierheime', 'home', '/shelters');
export const enclosuresMenuItem = createMenuItem('Gehege', 'home', '/enclosures');
export const adoptersMenuItem = createMenuItem('Interessenten', 'groups', '/adopters');
export const assignmentsMenuItem = createMenuItem('Anträge', 'assignment', '/assignments');
export const adoptionsMenuItem = createMenuItem('Adoptionen', 'favorite', '/adoptions');
export const healthMenuItem = createMenuItem('Gesundheit', 'local_hospital', '/health');
export const reportsMenuItem = createMenuItem('Reporting', 'bar_chart', '/reports');
export const settingsMenuItem = createMenuItem('Einstellungen', 'settings', '/settings');
export const registerMenuItem = createMenuItem('Register', 'person_add', '/register', false);
export const loginMenuItem = createMenuItem('Login', 'login', '/login', false);
export const logoutMenuItem = createMenuItem('Logout', 'logout', '/logout', false);
export const aboutMenuItem = createMenuItem('About', 'info', '/about', false);
export const demoMenuItem = createMenuItem('Demos', 'smart_toy', '/demo', false);

export const menuItems: MenuItem[] = [
  dashboardMenuItem,
  animalsMenuItem,
  sheltersMenuItem,
  enclosuresMenuItem,
  adoptersMenuItem,
  assignmentsMenuItem,
  adoptionsMenuItem,
  healthMenuItem,
  reportsMenuItem,
  settingsMenuItem,
  registerMenuItem,
  loginMenuItem,
  logoutMenuItem,
  aboutMenuItem,
  demoMenuItem,
];
