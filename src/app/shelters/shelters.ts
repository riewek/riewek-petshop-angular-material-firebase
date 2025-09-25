import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Shelter } from '../../model/shelter';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-shelters',
  imports: [MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './shelters.html',
  styleUrl: './shelters.scss',
})
export class Shelters extends TableComponent<Shelter> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(dataService: DataService) {
    super('id name location enclosureIds', dataService.findAllShelters());
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
