import { signal } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FirebaseEntity } from './firebase.model';

export abstract class TableComponent<T extends FirebaseEntity> {
  pageSize: number;
  pageSizeOptions: number[];
  displayedColumns: string[];
  dataAll = signal<T[]>([]);
  dataPagedSortedFiltered = signal<T[]>([]);
  dateFormat = 'dd.MM.yyyy';

  constructor(displayedColumns: string, data: T[]) {
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 15];
    this.displayedColumns = displayedColumns.split(' ');
    this.dataAll.set(data);
    this.dataPagedSortedFiltered.set(data.slice(0, this.pageSize));
  }

  ngAfterViewInitHook(paginator: MatPaginator) {
    paginator.page.subscribe(this.updateDataPagedSortedFiltered.bind(this));
  }

  private updateDataPagedSortedFiltered(page: PageEvent) {
    const start = page.pageIndex * page.pageSize;
    const end = start + page.pageSize;
    this.dataPagedSortedFiltered.set(this.dataAll().slice(start, end));
  }
}
