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
import { Router } from '@angular/router';
import { FormActionsComponent } from '../../../shared/form-actions/form-actions.component';
import { DialogTitleComponent } from '../../../shared/dialog-title/dialog-title.component';
import { AdoptionApplicationDao } from '../../../dao/adoptionApplication.dao';
import { MatIcon } from '@angular/material/icon';
import { FirebaseEntity } from '../../../shared/firebase.model';
import { LoadingComponent } from '../../../shared/loading.component';

@Component({
  selector: 'app-adoption-application-detail',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIcon,
    MatDatepickerModule,
    MatSelectModule,
    TranslatePipe,
    FormActionsComponent,
    DialogTitleComponent,
    LoadingComponent,
  ],
  templateUrl: './adoption-application-detail.html',
  styleUrl: './adoption-application-detail.scss',
})
export class AdoptionApplicationDetail extends EditComponent<
  AdoptionApplication,
  AdoptionApplicationDao
> {
  adopters = signal<Adopter[]>([]);
  animals = signal<Animal[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao,
    private routerIn: Router
  ) {
    super(
      routerIn,
      '/adoptionApplications',
      formBuilder.group({
        adopterId: ['', [Validators.required]],
        animalId: ['', [Validators.required]],
        createdAt: [new Date(), [Validators.required]],
        status: ['submitted', [Validators.required]],
      }),
      route,
      petShopDao.adoptionApplicationDao,
      [petShopDao.adopterDao, petShopDao.animalDao]
    );
  }

  protected override onDataLoaded(results: FirebaseEntity[]): void {
    this.adopters.set(results[0] as Adopter[]);
    this.animals.set(results[1] as Animal[]);
  }
}
