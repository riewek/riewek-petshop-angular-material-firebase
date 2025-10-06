import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { EditComponent } from '../../../shared/edit.component';
import { Enclosure } from '../../../model/enclosure';
import { TranslatePipe } from '@ngx-translate/core';
import { PetShopDao } from '../../../dao/petShop.dao';
import { Router } from '@angular/router';
import { FormActionsComponent } from '../../../shared/form-actions/form-actions.component';
import { DialogTitleComponent } from '../../../shared/dialog-title/dialog-title.component';
import { EnclosureDao } from '../../../dao/enclosure.dao';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-enclosure-detail',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioButton,
    MatIcon,
    MatRadioModule,
    MatSelectModule,
    TranslatePipe,
    FormActionsComponent,
    DialogTitleComponent,
  ],
  templateUrl: './enclosure-detail.html',
  styleUrl: './enclosure-detail.scss',
})
export class EnclosureDetail extends EditComponent<Enclosure, EnclosureDao> {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao,
    private routerIn: Router
  ) {
    super(
      routerIn,
      '/enclosures',
      formBuilder.group({
        name: ['', [Validators.required]],
        type: ['indoor', [Validators.required]],
        capacity: [0, [Validators.required, Validators.min(0)]],
        occupied: [0, [Validators.required, Validators.min(0)]],
        notes: ['', []],
      }),
      route,
      petShopDao.enclosureDao
    );
  }
}
