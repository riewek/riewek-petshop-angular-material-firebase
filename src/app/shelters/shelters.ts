import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FakeData } from '../../faker/fake.data';
import { Shelter } from '../../model/shelter';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';

@Component({
  selector: 'app-shelters',
  imports: [MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './shelters.html',
  styleUrl: './shelters.scss',
})
export class Shelters extends TableComponent<Shelter> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    super('id name location enclosureIds', new FakeData().shelters);
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
