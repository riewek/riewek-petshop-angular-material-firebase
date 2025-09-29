import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../../model/animal';
import { DataService } from '../../services/dataService';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditComponent } from '../../../shared/edit.component';
import { Enclosure } from '../../../model/enclosure';

@Component({
  selector: 'app-animal-detail',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckbox,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './animal-detail.html',
  styleUrl: './animal-detail.scss',
})
export class AnimalDetail extends EditComponent<Animal> {
  enclosures = signal<Enclosure[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    super(
      formBuilder.group({
        species: ['', [Validators.required]],
        breed: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
        sex: ['male', [Validators.required]],
        intakeDate: ['', [Validators.required]],
        healthStatus: ['Healthy', [Validators.required]],
        enclosureId: ['', [Validators.required]],
        photos: ['', [Validators.required]],
        adoptable: [true, [Validators.required]],
      }),
      route,
      (id) => dataService.findAnimal(id)
    );
    this.enclosures.set(dataService.findAllEnclosures());
  }
}
