import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FakeData } from '../../faker/fake.data';
import { AdoptionApplication } from '../../model/adoptionApplication';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AgePipe } from '../../shared/age.pipe';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';

@Component({
  selector: 'app-assignments',
  imports: [MatTableModule, MatPaginatorModule, MatIcon, RouterLink, DatePipe, AgePipe],
  templateUrl: './assignments.html',
  styleUrl: './assignments.scss',
})
//FIXME: rename component
export class Assignments extends TableComponent<AdoptionApplication> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    super('id adopterId animalId createdAt status', new FakeData().adoptionApplications);
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
