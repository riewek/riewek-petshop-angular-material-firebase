import { Component } from '@angular/core';
import { Shelter } from '../../model/shelter';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';
import { PetShopDao } from '../../dao/petShop.dao';
import { ShelterDao } from '../../dao/shelter.dao';
import { TableTitleComponent } from "../../shared/table-title/table-title.component";
import { LoadingComponent } from "../../shared/loading.component";

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
    TableTitleComponent,
    LoadingComponent
],
  templateUrl: './shelters.html',
  styleUrl: './shelters.scss',
})
export class Shelters extends TableComponent<Shelter, ShelterDao> {
  constructor(private petShopDao: PetShopDao) {
    super(petShopDao.shelterDao, 'id name location enclosureIds');
  }
}
