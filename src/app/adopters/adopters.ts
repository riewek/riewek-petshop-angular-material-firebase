import { Component } from '@angular/core';
import { Adopter } from '../../model/adopter';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from '../../shared/table.component';
import { FakeDataService } from '../services/fake.data.service';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';

@Component({
  selector: 'app-adopters',
  imports: [
    MatTableModule,
    MatButtonModule,
    TranslatePipe,
    TableToolbarComponent,
    TableActionsComponent,
  ],
  templateUrl: './adopters.html',
  styleUrl: './adopters.scss',
})
export class Adopters extends TableComponent<Adopter> {
  constructor(dataService: FakeDataService) {
    super('id name contact address housing experience', dataService.findAllAdopters());
  }
}
