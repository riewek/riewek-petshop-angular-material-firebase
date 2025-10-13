export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  needsLogin: boolean;
  needsAdmin: boolean;
  screens: boolean;
}

export function createMenuItem(
  title: string,
  icon: string,
  route: string,
  needsLogin: boolean,
  needsAdmin: boolean,
  screens: boolean
): MenuItem {
  return { title, icon, route, needsLogin, needsAdmin, screens };
}

export const defaultMenuItems: MenuItem[] = [
  {
    title: 'Register',
    icon: 'person_add',
    route: '/register',
    needsLogin: false,
    needsAdmin: false,
    screens: false,
  },
  {
    title: 'Login',
    icon: 'login',
    route: '/login',
    needsLogin: false,
    needsAdmin: false,
    screens: false,
  },
  {
    title: 'Logout',
    icon: 'logout',
    route: '/logout',
    needsLogin: true,
    needsAdmin: false,
    screens: false,
  },
  {
    title: 'About',
    icon: 'info',
    route: '/about',
    needsLogin: false,
    needsAdmin: false,
    screens: false,
  },
  {
    title: 'Demos',
    icon: 'smart_toy',
    route: '/demo',
    needsLogin: true,
    needsAdmin: false,
    screens: false,
  },
];
