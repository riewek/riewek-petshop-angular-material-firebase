import { Component } from '@angular/core';
import { AdoptionContract } from '../../model/adoptionContract';
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
import { AdoptionContractDao } from '../../dao/adoptionContract.dao';

@Component({
  selector: 'app-adoptionContracts',
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
  templateUrl: './adoptionContracts.html',
  styleUrl: './adoptionContracts.scss',
})
export class AdoptionContracts extends TableComponent<AdoptionContract, AdoptionContractDao> {
  constructor(private petShopDao: PetShopDao) {
    super(petShopDao.adoptionContractDao, 'id adoptionApplicationId contractUrl signedAt fee');
  }
}
