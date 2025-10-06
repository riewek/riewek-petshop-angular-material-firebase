import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
  imports: [MatButtonModule, MatIconModule],
})
export class FormActionsComponent {
  @Input() form!: FormGroup;
  @Input() okLabel: string = 'OK';
  @Input() cancelLabel: string = 'Cancel';

  @Output() ok = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onOk() {
    this.ok.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
