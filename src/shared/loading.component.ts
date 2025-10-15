import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    @if (loading) {
    <div class="loading-wrapper" data-cy="loading-spinner">
      <mat-spinner></mat-spinner>
    </div>
    } @else {
    <ng-content></ng-content>
    }
  `,
  styles: [``],
})
export class LoadingComponent {
  @Input({ required: true }) loading = false;
}
