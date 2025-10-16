import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-table-toolbar',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
  ],
  template: `
    <mat-toolbar>
      @if(enableEdit) {
      <button mat-icon-button [routerLink]="createLink" data-cy="btn-create">
        <mat-icon>add</mat-icon>
      </button>
      }
      <span class="spacer"></span>
      <mat-paginator
        class="mat-elevation-z8"
        [length]="length"
        [pageSize]="pageSize"
        [pageSizeOptions]="pageSizeOptions"
        (page)="pageChange.emit($event)"
      >
      </mat-paginator>
    </mat-toolbar>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class TableToolbarComponent {
  @Input() createLink: string[] = [];
  @Input() enableEdit: boolean = true;
  @Input() length = 0;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25];
  @Output() pageChange = new EventEmitter<PageEvent>();
}
