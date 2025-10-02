import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditComponent } from '../../../shared/edit.component';
import { Adopter } from '../../../model/adopter';
import { TranslatePipe } from '@ngx-translate/core';
import { PetShopDao } from '../../../dao/petShop.dao';

@Component({
  selector: 'app-adopter-detail',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, TranslatePipe],
  templateUrl: './adopter-detail.html',
  styleUrl: './adopter-detail.scss',
})
export class AdopterDetail extends EditComponent<Adopter> {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao
  ) {
    super(
      formBuilder.group({
        name: ['', [Validators.required]],
        contact: ['', [Validators.required]],
        address: ['', [Validators.required]],
        housing: ['', [Validators.required]],
        experience: ['', [Validators.required]],
      }),
      route,
      (id: string) => petShopDao.adopterDao.find(id)
    );
  }
}
