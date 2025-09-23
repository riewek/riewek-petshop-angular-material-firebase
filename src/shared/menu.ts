export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  screens: boolean;
}

export function createMenuItem(
  title: string,
  icon: string,
  route: string,
  screens: boolean = true
): MenuItem {
  return { title, icon, route, screens };
}
