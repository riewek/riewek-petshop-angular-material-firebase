import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService, Item } from './services/firebase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, MatToolbarModule, MatSlideToggleModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public readonly title = signal('riewek-petshop-angular-material-firebase');
  items$: Observable<Item[]>;

  constructor(private firebaseService: FirebaseService) {
    this.items$ = this.firebaseService.getItems();
  }
}
