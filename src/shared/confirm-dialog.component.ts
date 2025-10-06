import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  imports: [MatDialogModule, MatButtonModule, TranslatePipe],
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>{{ 'app.dialog.confirmDeleteTitle' | translate }}</h2>
    <mat-dialog-content>
      {{ 'app.dialog.confirmDeleteMessage' | translate }}
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="dialog-button" mat-button color="warn" [mat-dialog-close]="true">
        {{ 'app.dialog.ok' | translate }}
      </button>
      <button class="dialog-button" mat-button [mat-dialog-close]="false">
        {{ 'app.dialog.cancel' | translate }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
  .dialog-button {
     width: 120px;
    }
  `,
})
export class ConfirmDialogComponent {}
