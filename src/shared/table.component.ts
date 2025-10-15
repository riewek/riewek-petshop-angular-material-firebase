import { signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FirebaseEntity } from './firebase.model';
import { Dao } from './dao';

export abstract class TableComponent<T extends FirebaseEntity, D extends Dao<T>> {
  readonly pageSize: number;
  readonly pageSizeOptions: number[];
  readonly displayedColumns: string[];
  readonly dataAll = signal<T[]>([]);
  readonly dataPagedSortedFiltered = signal<T[]>([]);
  readonly dateFormat = 'dd.MM.yyyy';
  readonly loading = signal(true);

  constructor(private dao: D, displayedColumns: string) {
    this.loading.set(true);
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 15];
    this.displayedColumns = displayedColumns.split(' ');
    this.dao.findAllAsObservable().subscribe((data) => {
      this.loading.set(true);
      this.dataAll.set(data);
      this.dataPagedSortedFiltered.set(data.slice(0, this.pageSize));
      this.loading.set(false);
    });
  }

  onPageChange(page: PageEvent) {
    this.loading.set(true);
    const start = page.pageIndex * page.pageSize;
    const end = start + page.pageSize;
    this.dataPagedSortedFiltered.set(this.dataAll().slice(start, end));
    this.loading.set(false);
  }

  onDelete(entity: T) {
    this.dao.remove(entity.id!);
  }
}
