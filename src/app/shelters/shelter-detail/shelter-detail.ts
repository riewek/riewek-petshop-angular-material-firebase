import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { EditComponent } from '../../../shared/edit.component';
import { Shelter } from '../../../model/shelter';
import { Enclosure } from '../../../model/enclosure';
import { TranslatePipe } from '@ngx-translate/core';
import { PetShopDao } from '../../../dao/petShop.dao';
import { Router } from '@angular/router';
import { FormActionsComponent } from '../../../shared/form-actions/form-actions.component';
import { DialogTitleComponent } from '../../../shared/dialog-title/dialog-title.component';
import { ShelterDao } from '../../../dao/shelter.dao';

@Component({
  selector: 'app-shelter-detail',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    TranslatePipe,
    FormActionsComponent,
    DialogTitleComponent,
  ],
  templateUrl: './shelter-detail.html',
  styleUrl: './shelter-detail.scss',
})
export class ShelterDetail extends EditComponent<Shelter, ShelterDao> {
  enclosures = signal<Enclosure[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao,
    private routerIn: Router
  ) {
    super(
      routerIn,
      '/shelters',
      formBuilder.group({
        name: ['', [Validators.required]],
        location: ['', [Validators.required]],
        //enclosureIds: [[], [Validators.required]],
      }),
      route,
      petShopDao.shelterDao
    );
    petShopDao.enclosureDao.findAllAsObservable().subscribe((data) => this.enclosures.set(data));
  }
}
