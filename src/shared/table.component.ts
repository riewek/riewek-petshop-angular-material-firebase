import { signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FirebaseEntity } from './firebase.model';

export abstract class TableComponent<T extends FirebaseEntity> {
  readonly pageSize: number;
  readonly pageSizeOptions: number[];
  readonly displayedColumns: string[];
  readonly dataAll = signal<T[]>([]);
  readonly dataPagedSortedFiltered = signal<T[]>([]);
  readonly dateFormat = 'dd.MM.yyyy';

  constructor(displayedColumns: string, data: T[]) {
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 15];
    this.displayedColumns = displayedColumns.split(' ');
    this.dataAll.set(data);
    this.dataPagedSortedFiltered.set(data.slice(0, this.pageSize));
  }

  onPageChange(page: PageEvent) {
    const start = page.pageIndex * page.pageSize;
    const end = start + page.pageSize;
    this.dataPagedSortedFiltered.set(this.dataAll().slice(start, end));
  }
}
