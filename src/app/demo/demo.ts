import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import translationsEN from '../../../public/i18n/en.json';
import translationsDE from '../../../public/i18n/de.json';
import { PetShopDao } from '../../dao/petShop.dao';
import { Item } from '../services/firebase.service';

@Component({
  selector: 'app-demo',
  imports: [
    AsyncPipe,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    TranslatePipe,
    //TranslateDirective,
  ],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  public readonly title = signal('riewek-petshop-angular-material-firebase');
  items$: Observable<Item[]>;
  private language: 'en' | 'de' = 'en';
  public readonly hasData = signal(true);
  public readonly itemsSize = signal(0);
  public readonly adoptersSize = signal(0);
  public readonly adoptionApplicationsSize = signal(0);
  public readonly adoptionContractsSize = signal(0);
  public readonly animalHealthsSize = signal(0);
  public readonly animalsSize = signal(0);
  public readonly enclosureSize = signal(0);
  public readonly shelterSize = signal(0);

  constructor(public petShop: PetShopDao, private translate: TranslateService) {
    this.items$ = this.petShop.itemDao.findAllAsObservable();
    this.switchLanguage(); //change from en to de
    this.petShop.hasAnyData().then((hasData) => {
      this.hasData.set(hasData);
    });
    this.petShop.itemDao.size().then((size) => this.itemsSize.set(size));
    this.petShop.adopterDao.size().then((size) => this.adoptersSize.set(size));
    this.petShop.adoptionApplicationDao
      .size()
      .then((size) => this.adoptionApplicationsSize.set(size));
    this.petShop.adoptionContractDao.size().then((size) => this.adoptionContractsSize.set(size));
    this.petShop.animalHealthDao.size().then((size) => this.animalHealthsSize.set(size));
    this.petShop.animalDao.size().then((size) => this.animalsSize.set(size));
    this.petShop.enclosureDao.size().then((size) => this.enclosureSize.set(size));
    this.petShop.shelterDao.size().then((size) => this.shelterSize.set(size));
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
