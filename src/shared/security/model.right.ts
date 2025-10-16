export class ModelRight {
  model: string = '';
  read: boolean = false;
  create: boolean = false;
  edit: boolean = false;
  delete: boolean = false;
}

export function fullAccess(model: string): ModelRight {
  return {
    model: model,
    read: true,
    create: true,
    edit: true,
    delete: true,
  };
}

export function readOnly(model: string): ModelRight {
  return {
    model: model,
    read: true,
    create: true,
    edit: true,
    delete: true,
  };
}
