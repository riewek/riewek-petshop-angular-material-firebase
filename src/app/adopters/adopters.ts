import { Component } from '@angular/core';
import { Adopter } from '../../model/adopter';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';

@Component({
  selector: 'app-adopters',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
    TranslatePipe,
    TableToolbarComponent,
    TableActionsComponent,
  ],
  templateUrl: './adopters.html',
  styleUrl: './adopters.scss',
})
export class Adopters extends TableComponent<Adopter> {
  constructor(dataService: DataService) {
    super('id name contact address housing experience', dataService.findAllAdopters());
  }
}
