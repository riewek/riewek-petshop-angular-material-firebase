import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../../model/animal';
import { FakeDataService } from '../../../dao/fake/fake.data.service';
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

@Component({
  selector: 'app-animal-health-detail',
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
  templateUrl: './animal-health-detail.html',
  styleUrl: './animal-health-detail.scss',
})
export class AnimalHealthDetail extends EditComponent<AnimalHealth> {
  animals = signal<Animal[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: FakeDataService
  ) {
    super(
      formBuilder.group({
        animalId: ['', [Validators.required]],
        date: ['', [Validators.required]],
        type: ['checkup', [Validators.required]],
        notes: ['', [Validators.required]],
        vet: ['', []],
        //meds: ['', []],
      }),
      route,
      (id) => dataService.findAnimalHealth(id)
    );
    this.animals.set(dataService.findAllAnimals());
  }
}
