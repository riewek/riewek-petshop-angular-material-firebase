import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Adopter } from '../../model/adopter';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-adopters',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
  ],
  templateUrl: './adopters.html',
  styleUrl: './adopters.scss',
})
export class Adopters extends TableComponent<Adopter> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(dataService: DataService) {
    super('id name contact address housing experience', dataService.findAllAdopters());
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
