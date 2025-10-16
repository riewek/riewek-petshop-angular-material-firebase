import { Component } from '@angular/core';
import { Animal } from '../../model/animal';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AgePipe } from '../../shared/age.pipe';
import { TableComponent } from '../../shared/table.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TableToolbarComponent } from '../../shared/table-toolbar.component';
import { TableActionsComponent } from '../../shared/table-actions.component';
import { PetShopDao } from '../../dao/petShop.dao';
import { AnimalDao } from '../../dao/animal.dao';
import { TableTitleComponent } from "../../shared/table-title/table-title.component";
import { LoadingComponent } from "../../shared/loading.component";
import { UserService } from '../services/user.service';

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
    TableTitleComponent,
    LoadingComponent
],
  templateUrl: './animals.html',
  styleUrl: './animals.scss',
})
export class Animals extends TableComponent<Animal, AnimalDao> {
  constructor(private petShopDao: PetShopDao, public userService: UserService) {
    super(
      petShopDao.animalDao,
      'id species breed birthDate age sex intakeDate healthStatus enclosureId photos adoptable'
    );
  }
}
