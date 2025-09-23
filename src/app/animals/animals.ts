import { Component, signal } from '@angular/core';
import { FakeData } from '../../faker/fake.data';
import { Animal } from '../../model/animal';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AgePipe } from '../../shared/age.pipe';

@Component({
  selector: 'app-animals',
  imports: [MatTableModule, MatIcon, RouterLink, DatePipe, AgePipe],
  templateUrl: './animals.html',
  styleUrl: './animals.scss',
})
export class Animals {
  public animals = signal<Animal[]>([]);
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

  constructor() {
    const fakeData = new FakeData();
    this.animals.set(fakeData.animals);
  }
}
