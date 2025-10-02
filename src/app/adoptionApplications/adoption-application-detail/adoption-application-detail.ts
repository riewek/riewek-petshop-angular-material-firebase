import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../../model/animal';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditComponent } from '../../../shared/edit.component';
import { AdoptionApplication } from '../../../model/adoptionApplication';
import { Adopter } from '../../../model/adopter';
import { TranslatePipe } from '@ngx-translate/core';
import { PetShopDao } from '../../../dao/petShop.dao';

@Component({
  selector: 'app-adoption-application-detail',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    TranslatePipe,
  ],
  templateUrl: './adoption-application-detail.html',
  styleUrl: './adoption-application-detail.scss',
})
export class AdoptionApplicationDetail extends EditComponent<AdoptionApplication> {
  adopters = signal<Adopter[]>([]);
  animals = signal<Animal[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao
  ) {
    super(
      formBuilder.group({
        adopterId: ['', [Validators.required]],
        animalId: ['', [Validators.required]],
        createdAt: [new Date(), [Validators.required]],
        status: ['submitted', [Validators.required]],
      }),
      route,
      (id) => petShopDao.adoptionApplicationDao.find(id)
    );
    petShopDao.adopterDao.findAllAsObservable().subscribe((data) => this.adopters.set(data));
    petShopDao.animalDao.findAllAsObservable().subscribe((data) => this.animals.set(data));
  }
}
