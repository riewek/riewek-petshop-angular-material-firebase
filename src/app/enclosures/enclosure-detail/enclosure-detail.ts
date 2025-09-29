import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/dataService';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { EditComponent } from '../../../shared/edit.component';
import { Enclosure } from '../../../model/enclosure';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-enclosure-detail',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioButton,
    MatRadioModule,
    MatSelectModule,
    TranslatePipe,
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
        capacity: [0, [Validators.required, Validators.min(0)]],
        occupied: [0, [Validators.required, Validators.min(0)]],
        notes: ['', []],
      }),
      route,
      (id) => dataService.findEnclosure(id)
    );
  }
}
