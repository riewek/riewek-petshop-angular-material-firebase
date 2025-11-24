import { Component, computed, signal } from '@angular/core';
import { PetShopDao } from '../../dao/petShop.dao';
import { Animal } from '../../model/animal';
import { MatCardModule } from '@angular/material/card';
import { TableTitleComponent } from '../../shared/table-title/table-title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';
import { AgePipe } from '../../shared/age.pipe';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { LoadingComponent } from '../../shared/loading.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatButtonModule,
    TableTitleComponent,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    DatePipe,
    AgePipe,
    TranslatePipe,
    MatFormField,
    MatLabel,
    MatPaginatorModule,
    LoadingComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  readonly dateFormat = 'dd.MM.yyyy';
  readonly animals = signal<Animal[]>([]);
  readonly search = signal<string>('');
  readonly pageIndex = signal<number>(0);
  readonly pageSize = signal<number>(16);
  readonly loading = signal(true);

  readonly filteredAnimals = computed(() =>
    this.animals().filter((animal) => {
      const term = this.search().toLowerCase();
      return (
        animal.species.toLowerCase().includes(term) ||
        animal.breed.toLowerCase().includes(term) ||
        animal.sex?.toLowerCase().includes(term) ||
        animal.healthStatus?.toLowerCase().includes(term)
      );
    })
  );
  //FIXME: Paging und Search Probleme
  //Auf Page 2. Suche hat nur für Page 1 Ergebnisse. Was tun?
  readonly pagedAnimals = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();
    return this.filteredAnimals().slice(start, end);
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
  constructor(private petShopDao: PetShopDao) {
    petShopDao.animalDao.findAllAsObservable().subscribe((data) => {
      this.loading.set(true);
      this.animals.set(data);
      this.loading.set(false);
    });
  }

  onPageChange(event: PageEvent) {
    this.loading.set(true);
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loading.set(false);
  }
}
