import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { FirebaseEntity } from './firebase.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

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
    <button mat-icon-button (click)="onDelete()" data-cy="btn-delete">
      <mat-icon>delete</mat-icon>
    </button>
  `,
})
export class TableActionsComponent<T extends FirebaseEntity> {
  @Input() row!: T;
  private dialog = inject(MatDialog);
  @Output() delete = new EventEmitter<T>();

  onDelete() {
    //console.log('onDelete', this.row);
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(this.row);
        //console.log('Delete confirmed for', this.row);
        // Hier dein DAO/Service aufrufen:
        // this.dao.delete(this.row.id);
      }
    });
  }
}
