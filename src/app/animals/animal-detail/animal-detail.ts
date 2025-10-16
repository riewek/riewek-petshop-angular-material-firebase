import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../../model/animal';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditComponent } from '../../../shared/edit.component';
import { Enclosure } from '../../../model/enclosure';
import { TranslatePipe } from '@ngx-translate/core';
import { PetShopDao } from '../../../dao/petShop.dao';
import { Router } from '@angular/router';
import { FormActionsComponent } from '../../../shared/form-actions/form-actions.component';
import { DialogTitleComponent } from '../../../shared/dialog-title/dialog-title.component';
import { AnimalDao } from '../../../dao/animal.dao';
import { LoadingComponent } from "../../../shared/loading.component";

@Component({
  selector: 'app-animal-detail',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIcon,
    MatCheckbox,
    MatDatepickerModule,
    MatSelectModule,
    TranslatePipe,
    FormActionsComponent,
    DialogTitleComponent,
    LoadingComponent
],
  templateUrl: './animal-detail.html',
  styleUrl: './animal-detail.scss',
})
export class AnimalDetail extends EditComponent<Animal, AnimalDao> {
  enclosures = signal<Enclosure[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao,
    private routerIn: Router
  ) {
    super(
      routerIn,
      '/animals',
      formBuilder.group({
        species: ['', [Validators.required]],
        breed: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
        sex: ['male', [Validators.required]],
        intakeDate: ['', [Validators.required]],
        healthStatus: ['Healthy', [Validators.required]],
        enclosureId: ['', [Validators.required]],
        //photos: ['', [Validators.required]],
        adoptable: [true, [Validators.required]],
      }),
      route,
      petShopDao.animalDao
    );
    petShopDao.enclosureDao.findAllAsObservable().subscribe((data) => this.enclosures.set(data));
  }
}
