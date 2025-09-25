import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../../model/animal';
import { DataService } from '../../services/dataService';

@Component({
  selector: 'app-animal-detail',
  imports: [],
  templateUrl: './animal-detail.html',
  styleUrl: './animal-detail.scss',
})
export class AnimalDetail {
  readonly id = signal<string>('');
  readonly mode = signal<'edit' | 'create'>('edit');
  readonly animal = signal<Partial<Animal>>({});

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id')!;
      if (idParam === 'create') {
        this.mode.set('create');
        this.id.set('');
        this.animal.set({});
      } else {
        this.mode.set('edit');
        this.id.set(idParam);
        this.animal.set(dataService.findAnimal(idParam));
      }
    });
  }
}
