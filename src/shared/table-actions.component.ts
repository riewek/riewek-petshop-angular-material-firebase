import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { FirebaseEntity } from './firebase.model';

@Component({
  selector: 'app-table-actions',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
  ],
  template: `
    <button mat-icon-button [routerLink]="[row.id]" data-cy="btn-edit">
      <mat-icon>edit</mat-icon>
    </button>
    <button mat-icon-button data-cy="btn-delete">
      <mat-icon>delete</mat-icon>
    </button>
  `,
})
export class TableActionsComponent<T extends FirebaseEntity> {
  @Input() row!: T;
}
