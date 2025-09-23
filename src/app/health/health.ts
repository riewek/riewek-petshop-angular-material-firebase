import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FakeData } from '../../faker/fake.data';
import { HealthRecord } from '../../model/healthRecord';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';

@Component({
  selector: 'app-health',
  imports: [MatTableModule, MatPaginatorModule, MatIcon, RouterLink, DatePipe],
  templateUrl: './health.html',
  styleUrl: './health.scss',
})
//FIXME: rename component
export class Health extends TableComponent<HealthRecord> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    super('id animalId type notes vet meds', new FakeData().healthRecords);
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
