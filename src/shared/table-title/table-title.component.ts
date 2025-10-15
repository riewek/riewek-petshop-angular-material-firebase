import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.scss'],
  imports: [MatIcon, TranslatePipe],
  standalone: true,
})
export class TableTitleComponent {
  @Input() model: string = '';
}
