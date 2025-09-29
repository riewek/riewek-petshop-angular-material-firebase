import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
}
