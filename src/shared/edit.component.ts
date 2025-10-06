import { signal } from '@angular/core';
import { FirebaseEntity } from './firebase.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Dao } from './dao';

export abstract class EditComponent<T extends FirebaseEntity, D extends Dao<T>> {
  readonly id = signal<string>('');
  readonly mode = signal<'edit' | 'create'>('edit');
  readonly form: FormGroup;
  readonly appearanceValue = 'fill';

  constructor(
    private router: Router,
    private tableUrl: string,
    form: FormGroup,
    route: ActivatedRoute,
    private dao: D
  ) {
    this.form = form;
    //FIXME: Check for subscribe Destruction
    route.paramMap.subscribe((params) => {
      const idParam = params.get('id')!;
      if (idParam === 'create') {
        this.mode.set('create');
        this.id.set('');
      } else {
        this.mode.set('edit');
        this.id.set(idParam);
        dao.find(idParam).then((found) => {
          if (found) this.form.patchValue(found);
        });
      }
    });
  }

  save(): void {
    console.log('save');
    if (this.form.invalid) {
      // 👇 markiere alle Felder als "touched", damit Fehler angezeigt werden
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.valid) {
      this.dao.save(this.form.value);
      this.router.navigate([this.tableUrl]);
    }
  }

  cancel(): void {
    this.router.navigate([this.tableUrl]);
  }
}
