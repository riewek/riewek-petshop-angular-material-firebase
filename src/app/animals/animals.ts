import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Animal } from '../../model/animal';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AgePipe } from '../../shared/age.pipe';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from '../../shared/table.component';
import { DataService } from '../services/dataService';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-animals',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    RouterLink,
    DatePipe,
    AgePipe,
  ],
  templateUrl: './animals.html',
  styleUrl: './animals.scss',
})
export class Animals extends TableComponent<Animal> implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dataService: DataService) {
    super(
      'id species breed birthDate age sex intakeDate healthStatus enclosureId photos adoptable',
      dataService.findAllAnimals()
    );
  }

  ngAfterViewInit() {
    this.ngAfterViewInitHook(this.paginator);
  }
}
