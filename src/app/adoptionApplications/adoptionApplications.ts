import { Component } from '@angular/core';
import { AdoptionApplication } from '../../model/adoptionApplication';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';
import { PetShopDao } from '../../dao/petShop.dao';
import { AdoptionApplicationDao } from '../../dao/adoptionApplication.dao';
import { LoadingComponent } from '../../shared/loading.component';

@Component({
  selector: 'app-adoptionApplications',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
    DatePipe,
    TranslatePipe,
    TableToolbarComponent,
    TableActionsComponent,
    LoadingComponent,
  ],
  templateUrl: './adoptionApplications.html',
  styleUrl: './adoptionApplications.scss',
})
export class AdoptionApplications extends TableComponent<
  AdoptionApplication,
  AdoptionApplicationDao
> {
  constructor(private petShopDao: PetShopDao) {
    super(petShopDao.adoptionApplicationDao, 'id adopterId animalId createdAt status');
  }
}
