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

  constructor(form: FormGroup, route: ActivatedRoute, data: (value: string) => T) {
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
        const foundAnimal = data(idParam);
        //  this.animal.set(foundAnimal);
        this.form.patchValue(foundAnimal);
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
