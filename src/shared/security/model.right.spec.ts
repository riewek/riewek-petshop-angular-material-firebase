import { fullAccess, readOnly } from './model.right';

describe('ModelRight', () => {
  it('should create fullAccess', () => {
    const modelRight = fullAccess('test');
    expect(modelRight.model).toBe('test');
    expect(modelRight.read).toBeTruthy();
    expect(modelRight.create).toBeTruthy();
    expect(modelRight.edit).toBeTruthy();
    expect(modelRight.delete).toBeTruthy();
  });

  it('should create readOnly', () => {
    const modelRight = readOnly('test');
    expect(modelRight.model).toBe('test');
    expect(modelRight.read).toBeTruthy();
    expect(modelRight.create).toBeFalsy();
    expect(modelRight.edit).toBeFalsy();
    expect(modelRight.delete).toBeFalsy();
  });
});
