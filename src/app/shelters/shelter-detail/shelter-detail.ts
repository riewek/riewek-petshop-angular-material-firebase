import { Component, signal, ViewChild } from '@angular/core';
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
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditComponent } from '../../../shared/edit.component';
import { Shelter } from '../../../model/shelter';
import { Enclosure } from '../../../model/enclosure';

@Component({
  selector: 'app-shelter-detail',
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
  templateUrl: './shelter-detail.html',
  styleUrl: './shelter-detail.scss',
})
export class ShelterDetail extends EditComponent<Shelter> {
  enclosures = signal<Enclosure[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    super(
      formBuilder.group({
        name: ['', [Validators.required]],
        location: ['', [Validators.required]],
        //enclosureIds: [[], [Validators.required]],
      }),
      route,
      (id) => dataService.findShelter(id)
    );
    this.enclosures.set(dataService.findAllEnclosures());
  }
}
