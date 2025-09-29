import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/dataService';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { EditComponent } from '../../../shared/edit.component';
import { Shelter } from '../../../model/shelter';
import { Enclosure } from '../../../model/enclosure';

@Component({
  selector: 'app-shelter-detail',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
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
