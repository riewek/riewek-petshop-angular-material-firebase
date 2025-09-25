import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../../model/animal';
import { DataService } from '../../services/dataService';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-animal-detail',
  providers: [provideNativeDateAdapter()],
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
  ],
  templateUrl: './animal-detail.html',
  styleUrl: './animal-detail.scss',
})
export class AnimalDetail {
  readonly id = signal<string>('');
  readonly mode = signal<'edit' | 'create'>('edit');
  readonly animal = signal<Partial<Animal>>({});
  readonly form: FormGroup;
  readonly appearanceValue = 'fill';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      species: ['', [Validators.required]],
      breed: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      sex: ['male', [Validators.required]],
      intakeDate: ['', [Validators.required]],
      healthStatus: ['Healthy', [Validators.required]],
      enclosureId: ['', [Validators.required]],
      photos: ['', [Validators.required]],
      adoptable: [true, [Validators.required]],
    });
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id')!;
      if (idParam === 'create') {
        this.mode.set('create');
        this.id.set('');
        this.animal.set({});
        //FIXME set default values
      } else {
        this.mode.set('edit');
        this.id.set(idParam);
        const foundAnimal = this.dataService.findAnimal(idParam);
        this.animal.set(foundAnimal);
        this.form.patchValue(foundAnimal);
      }
    });
  }

  get animalSpecies() {
    return this.form.get('species')!;
  }

  get animalBreed() {
    return this.form.get('breed')!;
  }

  get animalBirthDate() {
    return this.form.get('birthDate')!;
  }

  get animalSex() {
    return this.form.get('sex')!;
  }

  get animalIntakeDate() {
    return this.form.get('intakeDate')!;
  }

  get animalHealthStatus() {
    return this.form.get('healthStatus')!;
  }

  get animalEnclosureId() {
    return this.form.get('enclosureId')!;
  }

  get animalPhotos() {
    return this.form.get('photos')!;
  }

  get animalAdoptable() {
    return this.form.get('adoptable')!;
  }

  save(): void {
    const formValues: Animal = this.form.value;
    console.log(formValues);
  }
}
