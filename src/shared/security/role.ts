import { ModelRight } from './model.right';
import { PageRight } from './page.right';

export class Role {
  name: string = '';
  pageRights: PageRight[] = [];
  modelRights: ModelRight[] = [];

  hasModelRight(modelRight: ModelRight): boolean {
    return this.modelRights.some(
      (right: ModelRight) => right.model === modelRight.model && right.read
    );
  }
}
