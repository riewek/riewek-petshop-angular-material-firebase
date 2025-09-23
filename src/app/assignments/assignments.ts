import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AdoptionApplication } from '../../model/adoptionApplication';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-assignments',
  imports: [MatTableModule, MatPaginatorModule, MatIcon, RouterLink, DatePipe],
  templateUrl: './assignments.html',
  styleUrl: './assignments.scss',
})
//FIXME: rename component
export class Assignments extends TableComponent<AdoptionApplication> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(dataService: DataService) {
    super('id adopterId animalId createdAt status', dataService.adoptionApplications);
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
