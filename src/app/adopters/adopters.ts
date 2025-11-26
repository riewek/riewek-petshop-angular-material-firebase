import { Component } from '@angular/core';
import { Adopter, filterAdopter } from '../../model/adopter';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';
import { PetShopDao } from '../../dao/petShop.dao';
import { AdopterDao } from '../../dao/adopter.dao';
import { TableTitleComponent } from '../../shared/table-title/table-title.component';
import { LoadingComponent } from '../../shared/loading.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-adopters',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIcon,
    TranslatePipe,
    TableToolbarComponent,
    TableActionsComponent,
    TableTitleComponent,
    LoadingComponent,
    MatInputModule,
  ],
  templateUrl: './adopters.html',
  styleUrl: './adopters.scss',
})
export class Adopters extends TableComponent<Adopter, AdopterDao> {
  constructor(private petShopDao: PetShopDao) {
    super(petShopDao.adopterDao, 'id name contact address housing experience');
  }

  override filter = filterAdopter;
}
