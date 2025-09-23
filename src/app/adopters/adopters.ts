import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FakeData } from '../../faker/fake.data';
import { Adopter } from '../../model/adopter';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';

@Component({
  selector: 'app-adopters',
  imports: [MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './adopters.html',
  styleUrl: './adopters.scss',
})
export class Adopters extends TableComponent<Adopter> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    super('id name contact address housing experience', new FakeData().adopters);
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
