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
import { AnimalHealth } from '../../../model/animalHealth';
import { TranslatePipe } from '@ngx-translate/core';
import { PetShopDao } from '../../../dao/petShop.dao';
import { Router } from '@angular/router';
import { FormActionsComponent } from '../../../shared/form-actions/form-actions.component';
import { DialogTitleComponent } from '../../../shared/dialog-title/dialog-title.component';
import { AnimalHealthDao } from '../../../dao/animalHealth.dao';
import { MatIcon } from '@angular/material/icon';
import { LoadingComponent } from "../../../shared/loading.component";

@Component({
  selector: 'app-animal-health-detail',
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
    LoadingComponent
],
  templateUrl: './animal-health-detail.html',
  styleUrl: './animal-health-detail.scss',
})
export class AnimalHealthDetail extends EditComponent<AnimalHealth, AnimalHealthDao> {
  animals = signal<Animal[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao,
    private routerIn: Router
  ) {
    super(
      routerIn,
      '/animalHealths',
      formBuilder.group({
        animalId: ['', [Validators.required]],
        date: ['', [Validators.required]],
        type: ['checkup', [Validators.required]],
        notes: ['', [Validators.required]],
        vet: ['', []],
        //meds: ['', []],
      }),
      route,
      petShopDao.animalHealthDao
    );
    petShopDao.animalDao.findAllAsObservable().subscribe((data) => this.animals.set(data));
  }
}
