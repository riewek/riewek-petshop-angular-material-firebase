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

@Component({
  selector: 'app-enclosure-detail',
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
  templateUrl: './enclosure-detail.html',
  styleUrl: './enclosure-detail.scss',
})
export class EnclosureDetail extends EditComponent<Enclosure> {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    super(
      formBuilder.group({
        name: ['', [Validators.required]],
        type: ['indoor', [Validators.required]],
        capacity: [0, [Validators.required]],
        occupied: [0, [Validators.required]],
        notes: ['', []],
      }),
      route,
      (id) => dataService.findEnclosure(id)
    );
  }
}
