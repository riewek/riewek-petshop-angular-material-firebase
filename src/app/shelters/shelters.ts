import { Component } from '@angular/core';
import { Shelter } from '../../model/shelter';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { FakeDataService } from '../../dao/fake/fake.data.service';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';

@Component({
  selector: 'app-shelters',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
    TranslatePipe,
    TableToolbarComponent,
    TableActionsComponent,
  ],
  templateUrl: './shelters.html',
  styleUrl: './shelters.scss',
})
export class Shelters extends TableComponent<Shelter> {
  constructor(dataService: FakeDataService) {
    super('id name location enclosureIds', dataService.findAllShelters());
  }
}
