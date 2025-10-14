import { createMenuItem } from './menu';

describe('menu', () => {
  it('should create a screen menu', () => {
    const menuItem = createMenuItem('A', 'B', 'C', true, true, true);
    expect(menuItem.title).toBe('A');
    expect(menuItem.icon).toBe('B');
    expect(menuItem.route).toBe('C');
    expect(menuItem.screens).toBeTruthy();
    expect(menuItem.needsAdmin).toBeTruthy();
    expect(menuItem.needsLogin).toBeTruthy();
  });
});
