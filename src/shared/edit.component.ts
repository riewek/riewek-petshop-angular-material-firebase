import { EventEmitter, signal } from '@angular/core';
import { FirebaseEntity } from './firebase.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Dao } from './dao';
import { combineLatest } from 'rxjs';

export abstract class EditComponent<T extends FirebaseEntity, D extends Dao<T>> {
  readonly id = signal<string>('');
  readonly mode = signal<'edit' | 'create'>('edit');
  readonly form: FormGroup;
  readonly appearanceValue = 'fill';
  readonly loading = signal(true);
  readonly eventEmitter = new EventEmitter();

  constructor(
    private router: Router,
    private tableUrl: string,
    form: FormGroup,
    route: ActivatedRoute,
    private dao: D,
    private daos: Dao<FirebaseEntity>[] = []
  ) {
    //FIXME: signals im constructor zu früh, ngOnInit?
    this.form = form;
    //FIXME: Check for subscribe Destruction
    route.paramMap.subscribe((params) => {
      const idParam = params.get('id')!;
      if (idParam === 'create') {
        this.mode.set('create');
        this.id.set('');
        this.loadDaos(this.daos);
      } else {
        this.mode.set('edit');
        this.id.set(idParam);
        this.dao.find(idParam).then((found) => {
          if (found) this.form.patchValue(found);
          this.loadDaos(this.daos);
        });
      }
    });
  }

  loadDaos(daos: Dao<FirebaseEntity>[]) {
    if (!daos.length) {
      this.loadingStopped();
      return;
    }
    const observables = daos.map((dao) => dao.findAllAsObservable());
    combineLatest(observables).subscribe({
      next: (results) => {
        this.onDataLoaded(results as FirebaseEntity[]);
        this.loadingStopped();
      },
      error: (err) => {
        console.error('Error loading data', err);
        this.loadingStopped();
      },
    });
  }

  protected onDataLoaded(results: FirebaseEntity[]): void {}

  private loadingStopped() {
    this.loading.set(false); //FIXME signals gehen in e2e tests nicht
    this.eventEmitter.emit('loadingStopped'); //FIXME Workaround für signals?
    window.dispatchEvent(new Event('loadingStopped')); //FIXME Workaround für signals?
    console.log('EditComponent.loadingStopped was called');
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
