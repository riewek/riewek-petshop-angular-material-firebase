import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService, Item } from '../services/firebase.service';

@Component({
  selector: 'app-demo',
  imports: [AsyncPipe, MatToolbarModule, MatSlideToggleModule, MatButtonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  public readonly title = signal('riewek-petshop-angular-material-firebase');
  items$: Observable<Item[]>;

  constructor(private firebaseService: FirebaseService) {
    this.items$ = this.firebaseService.getItems();
  }
}
