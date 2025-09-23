import { Component, signal, ViewChild } from '@angular/core';
import { FakeData } from '../../faker/fake.data';
import { Animal } from '../../model/animal';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AgePipe } from '../../shared/age.pipe';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-animals',
  imports: [MatTableModule, MatPaginatorModule, MatIcon, RouterLink, DatePipe, AgePipe],
  templateUrl: './animals.html',
  styleUrl: './animals.scss',
})
export class Animals {
  public animalsAll = signal<Animal[]>([]);
  public animalsPagedSortedFiltered = signal<Animal[]>([]);
  public displayedColumns = [
    'id',
    'species',
    'breed',
    'birthDate',
    'age',
    'sex',
    'intakeDate',
    'healthStatus',
    'enclosureId',
    'photos',
    'adoptable',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 10;
  pageSizeOptions = [5, 10, 15];

  constructor() {
    const fakeData = new FakeData();
    this.animalsPagedSortedFiltered.set(fakeData.animals.slice(0, 10));
    this.animalsAll.set(fakeData.animals);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page) => {
      const start = page.pageIndex * page.pageSize;
      const end = start + page.pageSize;
      const animals = this.animalsAll().slice(start, end);
      this.animalsPagedSortedFiltered.set(animals);
    });
  }
}
