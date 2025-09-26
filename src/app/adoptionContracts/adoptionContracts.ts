import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AdoptionContract } from '../../model/adoptionContract';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-adoptionContracts',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
    DatePipe,
  ],
  templateUrl: './adoptionContracts.html',
  styleUrl: './adoptionContracts.scss',
})
export class AdoptionContracts extends TableComponent<AdoptionContract> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(dataService: DataService) {
    super(
      'id adoptionApplicationId contractUrl signedAt fee',
      dataService.findAllAdoptionContracts()
    );
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
