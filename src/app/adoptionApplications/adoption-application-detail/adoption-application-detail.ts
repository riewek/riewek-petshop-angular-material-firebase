import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../../model/animal';
import { DataService } from '../../services/dataService';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatDatepicker,
  MatDatepickerToggle,
  MatDatepickerInput,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditComponent } from '../../../shared/edit.component';
import { Enclosure } from '../../../model/enclosure';
import { AdoptionApplication } from '../../../model/adoptionApplication';
import { Adopter } from '../../../model/adopter';

@Component({
  selector: 'app-adoption-application-detail',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioButton,
    MatRadioModule,
    MatCheckbox,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatDatepickerModule,
    MatSelectModule,
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
    private dataService: DataService
  ) {
    super(
      formBuilder.group({
        adopterId: ['', [Validators.required]],
        animalId: ['', [Validators.required]],
        createdAt: [new Date(), [Validators.required]],
        status: ['submitted', [Validators.required]],
      }),
      route,
      (id) => dataService.findAdoptionApplication(id)
    );
    this.adopters.set(dataService.findAllAdopters());
    this.animals.set(dataService.findAllAnimals());
  }
}
