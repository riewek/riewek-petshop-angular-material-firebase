import { Component } from '@angular/core';
import { AnimalHealth } from '../../model/animalHealth';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { FakeDataService } from '../../dao/fake/fake.data.service';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';

@Component({
  selector: 'app-animalHealths',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
    DatePipe,
    TranslatePipe,
    TableToolbarComponent,
    TableActionsComponent,
  ],
  templateUrl: './animalHealths.html',
  styleUrl: './animalHealths.scss',
})
export class AnimalHealths extends TableComponent<AnimalHealth> {
  constructor(dataService: FakeDataService) {
    super('id animalId type notes vet meds', dataService.findAllAnimalHealths());
  }
}
