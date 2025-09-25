import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AnimalHealth } from '../../model/animalHealth';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-animalHealths',
  imports: [MatTableModule, MatPaginatorModule, MatIcon, RouterLink, DatePipe],
  templateUrl: './animalHealths.html',
  styleUrl: './animalHealths.scss',
})
export class AnimalHealths extends TableComponent<AnimalHealth> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(dataService: DataService) {
    super('id animalId type notes vet meds', dataService.findAllAnimalHealths());
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
