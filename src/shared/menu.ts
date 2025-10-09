export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  needsLogin: boolean;
  screens: boolean;
}

export function createMenuItem(
  title: string,
  icon: string,
  route: string,
  needsLogin: boolean,
  screens: boolean = true
): MenuItem {
  return { title, icon, route, needsLogin, screens };
}
