import { Component } from '@angular/core';
import { PetShopDao } from '../../dao/petShop.dao';
import { Animal, filterAnimal } from '../../model/animal';
import { MatCardModule } from '@angular/material/card';
import { TableTitleComponent } from '../../shared/table-title/table-title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';
import { AgePipe } from '../../shared/age.pipe';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoadingComponent } from '../../shared/loading.component';
import { TableComponent } from '../../shared/table.component';
import { AnimalDao } from '../../dao/animal.dao';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatButtonModule,
    TableTitleComponent,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    DatePipe,
    AgePipe,
    TranslatePipe,
    MatFormField,
    MatLabel,
    MatPaginatorModule,
    LoadingComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard extends TableComponent<Animal, AnimalDao> {
  constructor(private petShopDao: PetShopDao) {
    super(
      petShopDao.animalDao,
      'id species breed birthDate age sex intakeDate healthStatus enclosureId photos adoptable'
    );
    this.pageSize.set(16);
    this.pageSizeOptions.set([8, 16, 24]);
  }

  override filter = filterAnimal;
}
