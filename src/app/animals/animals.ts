import { Component } from '@angular/core';
import { Animal } from '../../model/animal';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AgePipe } from '../../shared/age.pipe';
import { TableComponent } from '../../shared/table.component';
import { FakeDataService } from '../../dao/fake/fake.data.service';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';

@Component({
  selector: 'app-animals',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
    TranslatePipe,
    DatePipe,
    AgePipe,
    TableToolbarComponent,
    TableActionsComponent,
  ],
  templateUrl: './animals.html',
  styleUrl: './animals.scss',
})
export class Animals extends TableComponent<Animal> {
  constructor(public dataService: FakeDataService) {
    super(
      'id species breed birthDate age sex intakeDate healthStatus enclosureId photos adoptable',
      dataService.findAllAnimals()
    );
  }
}
