import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Enclosure } from '../../model/enclosure';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-enclosures',
  imports: [MatTableModule, MatPaginatorModule, MatIcon, RouterLink],
  templateUrl: './enclosures.html',
  styleUrl: './enclosures.scss',
})
export class Enclosures extends TableComponent<Enclosure> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(dataService: DataService) {
    super('id name type capacity occupied notes', dataService.enclosures);
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
