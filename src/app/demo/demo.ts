import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FirebaseService, Item } from '../services/firebase.service';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import translationsEN from '../../../public/i18n/en.json';
import translationsDE from '../../../public/i18n/de.json';

@Component({
  selector: 'app-demo',
  imports: [
    AsyncPipe,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  public readonly title = signal('riewek-petshop-angular-material-firebase');
  items$: Observable<Item[]>;
  private language: 'en' | 'de' = 'en';

  constructor(private firebaseService: FirebaseService, private translate: TranslateService) {
    this.items$ = this.firebaseService.getItems();
    this.switchLanguage(); //change from en to de
  }

  switchLanguage(): void {
    if (this.language === 'en') {
      this.language = 'de';
      this.translate.setTranslation('de', translationsDE);
      this.translate.use('de');
    } else {
      this.language = 'en';
      this.translate.setTranslation('en', translationsEN);
      this.translate.use('en');
    }
  }
}
