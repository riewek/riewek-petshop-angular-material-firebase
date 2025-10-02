import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeDataService } from '../../../dao/fake/fake.data.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditComponent } from '../../../shared/edit.component';
import { AdoptionContract } from '../../../model/adoptionContract';
import { AdoptionApplication } from '../../../model/adoptionApplication';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-adoption-contract-detail',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    TranslatePipe,
  ],
  templateUrl: './adoption-contract-detail.html',
  styleUrl: './adoption-contract-detail.scss',
})
export class AdoptionContractDetail extends EditComponent<AdoptionContract> {
  adoptionApplications = signal<AdoptionApplication[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: FakeDataService
  ) {
    super(
      formBuilder.group({
        adoptionApplicationId: ['', [Validators.required]],
        contractUrl: ['', []],
        signedAt: ['', []],
        fee: ['', [Validators.required, Validators.min(0)]],
      }),
      route,
      (id) => dataService.findAdoptionContract(id)
    );
    this.adoptionApplications.set(dataService.findAllAdoptionApplications());
  }
}
