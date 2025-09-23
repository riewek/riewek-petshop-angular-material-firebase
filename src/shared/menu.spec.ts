import { createMenuItem } from './menu';

describe('menu', () => {
  it('should create a screen menu', () => {
    const menuItem = createMenuItem('A', 'B', 'C');
    expect(menuItem.title).toBe('A');
    expect(menuItem.icon).toBe('B');
    expect(menuItem.route).toBe('C');
    expect(menuItem.screens).toBeTruthy();
  });
  it('should create a not screen menu', () => {
    const menuItem = createMenuItem('A', 'B', 'C', false);
    expect(menuItem.title).toBe('A');
    expect(menuItem.icon).toBe('B');
    expect(menuItem.route).toBe('C');
    expect(menuItem.screens).toBeFalsy();
  });
});
