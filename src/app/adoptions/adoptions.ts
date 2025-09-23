import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FakeData } from '../../faker/fake.data';
import { AdoptionContract } from '../../model/adoptionContract';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';

@Component({
  selector: 'app-adoptions',
  imports: [MatTableModule, MatPaginatorModule, RouterLink, DatePipe],
  templateUrl: './adoptions.html',
  styleUrl: './adoptions.scss',
})
//FIXME: rename component
export class Adoptions extends TableComponent<AdoptionContract> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    super('id adoptionApplicationId contractUrl signedAt fee', new FakeData().adoptionContracts);
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
