import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  imports: [TranslatePipe],
  standalone: true,
})
export class DialogTitleComponent {
  @Input() form!: FormGroup;
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() modelKey: string = '';
}
