import { computed, signal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FirebaseEntity } from './firebase.model';
import { Dao } from './dao';

export abstract class TableComponent<T extends FirebaseEntity, D extends Dao<T>> {
  readonly pageIndex = signal<number>(0);
  readonly pageSize = signal<number>(0);
  readonly pageSizeOptions = signal<number[]>([]);
  readonly displayedColumns: string[];
  readonly dataAll = signal<T[]>([]);
  //  readonly dataPagedSortedFiltered = signal<T[]>([]);
  readonly dateFormat = 'dd.MM.yyyy';
  readonly loading = signal(true);
  readonly search = signal<string>('');

  readonly dataFiltered = computed(() => {
    return this.dataAll().filter((dataRow) => this.filter(dataRow, this.search().toLowerCase()));
  });
  readonly dataPagedSortedFiltered = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();
    return this.dataFiltered().slice(start, end);
  });
  /*
  readonly pagedAnimals = computed(() => {
    const all = this.filteredAnimals();
    let start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();
    if (start >= all.length && all.length > 0) {
      this.pageIndex.set(Math.max(Math.ceil(all.length / this.pageSize()) - 1, 0));
      start = this.pageIndex() * this.pageSize();
    }
    return all.slice(start, start + this.pageSize());
  });*/

  constructor(private dao: D, displayedColumns: string) {
    this.loading.set(true);
    this.pageSize.set(10);
    this.pageSizeOptions.set([5, 10, 15]);
    this.displayedColumns = displayedColumns.split(' ');
    this.dao.findAllAsObservable().subscribe((data) => {
      this.loading.set(true);
      this.dataAll.set(data);
      //this.dataPagedSortedFiltered.set(data.slice(0, this.pageSize()));
      this.loading.set(false);
    });
  }

  onPageChange(event: PageEvent) {
    this.loading.set(true);
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loading.set(false);
  }

  onDelete(entity: T) {
    this.dao.remove(entity.id!);
  }

  abstract filter(entity: T, term: string): boolean;
}
