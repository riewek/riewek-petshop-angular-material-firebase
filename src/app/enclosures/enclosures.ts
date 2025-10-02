import { Component } from '@angular/core';
import { Enclosure } from '../../model/enclosure';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';
import { PetShopDao } from '../../dao/petShop.dao';

@Component({
  selector: 'app-enclosures',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIcon,
    TranslatePipe,
    TableToolbarComponent,
    TableActionsComponent,
  ],
  templateUrl: './enclosures.html',
  styleUrl: './enclosures.scss',
})
export class Enclosures extends TableComponent<Enclosure> {
  constructor(private petShopDao: PetShopDao) {
    super('id name type capacity occupied notes', petShopDao.enclosureDao.findAllAsObservable());
  }
}
