import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { PetShopDao } from '../../../dao/petShop.dao';
import { Router } from '@angular/router';
import { FormActionsComponent } from '../../../shared/form-actions/form-actions.component';
import { DialogTitleComponent } from '../../../shared/dialog-title/dialog-title.component';
import { AdoptionContractDao } from '../../../dao/adoptionContract.dao';

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
    FormActionsComponent,
    DialogTitleComponent,
  ],
  templateUrl: './adoption-contract-detail.html',
  styleUrl: './adoption-contract-detail.scss',
})
export class AdoptionContractDetail extends EditComponent<AdoptionContract, AdoptionContractDao> {
  adoptionApplications = signal<AdoptionApplication[]>([]);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petShopDao: PetShopDao,
    private routerIn: Router
  ) {
    super(
      routerIn,
      '/adoptionContracts',
      formBuilder.group({
        adoptionApplicationId: ['', [Validators.required]],
        contractUrl: ['', []],
        signedAt: ['', []],
        fee: ['', [Validators.required, Validators.min(0)]],
      }),
      route,
      petShopDao.adoptionContractDao
    );
    petShopDao.adoptionApplicationDao
      .findAllAsObservable()
      .subscribe((data) => this.adoptionApplications.set(data));
  }
}
