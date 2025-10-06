import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, TranslateModule],
  templateUrl: './text-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) labelKey!: string;

  /** Optional: max length für Anzeige */
  @Input() maxLength = 60;

  /** Optional: ob Feld disabled ist */
  @Input() disabled = false;

  /** Convenience getter */
  get control(): AbstractControl {
    return this.form.get(this.controlName)!;
  }
}
