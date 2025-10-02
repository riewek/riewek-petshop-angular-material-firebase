import { signal } from '@angular/core';
import { FirebaseEntity } from './firebase.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export abstract class EditComponent<T extends FirebaseEntity> {
  readonly id = signal<string>('');
  readonly mode = signal<'edit' | 'create'>('edit');
  //readonly animal = signal<Partial<T>>({}); //FIXME: needed?
  readonly form: FormGroup;
  readonly appearanceValue = 'fill';

  constructor(form: FormGroup, route: ActivatedRoute, data: (id: string) => Promise<T | null>) {
    this.form = form;
    //FIXME: Check for subscribe Destruction
    route.paramMap.subscribe((params) => {
      const idParam = params.get('id')!;
      if (idParam === 'create') {
        this.mode.set('create');
        this.id.set('');
        //    this.animal.set({});
      } else {
        this.mode.set('edit');
        this.id.set(idParam);
        data(idParam).then((found) => {
          if (found) this.form.patchValue(found);
        });
      }
    });
  }

  save(): void {
    console.log('save');
    const formValues: T = this.form.value;
    console.log(formValues);
  }

  cancel(): void {
    //FIXME: back to animals table
    console.log('cancel');
  }
}
