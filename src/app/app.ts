import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { TranslateService } from '@ngx-translate/core';
import translationsEN from '../../public/i18n/en.json';
import translationsDE from '../../public/i18n/de.json';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setTranslation('de', translationsDE);
    this.translate.setTranslation('en', translationsEN);
    this.translate.setFallbackLang('en');
    this.translate.use('de');
  }
}
