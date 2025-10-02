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
import { Animal } from '../../model/animal';
import { FakeDataService } from '../../dao/fake/fake.data.service';

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
  public readonly animals = signal<Animal[]>([]);

  constructor(
    private firebaseService: FirebaseService,
    private translate: TranslateService,
    private fakeDataService: FakeDataService
  ) {
    this.items$ = this.firebaseService.itemDao.findAllAsObservable();
    this.switchLanguage(); //change from en to de
    this.firebaseService.hasData().then((hasData) => {
      this.hasData.set(hasData);
    });
    this.firebaseService.itemDao.size().then((size) => this.itemsSize.set(size));
    this.firebaseService.adopterDao.size().then((size) => this.adoptersSize.set(size));
    this.firebaseService.adoptionApplicationDao
      .size()
      .then((size) => this.adoptionApplicationsSize.set(size));
    this.firebaseService.adoptionContractDao
      .size()
      .then((size) => this.adoptionContractsSize.set(size));
    this.firebaseService.animalHealthDao.size().then((size) => this.animalHealthsSize.set(size));
    this.firebaseService.animalDao.size().then((size) => this.animalsSize.set(size));
    this.firebaseService.enclosureDao.size().then((size) => this.enclosureSize.set(size));
    this.firebaseService.shelterDao.size().then((size) => this.shelterSize.set(size));
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

  loadData(): void {
    //this.animals.set(this.fakeDataService.findAllAnimals());
    console.log('Start');
    for (const adopter of this.fakeDataService.findAllAdopters())
      this.firebaseService.adopterDao.save(adopter);
    for (const adoptionApplication of this.fakeDataService.findAllAdoptionApplications())
      this.firebaseService.adoptionApplicationDao.save(adoptionApplication);
    for (const adoptionContract of this.fakeDataService.findAllAdoptionContracts())
      this.firebaseService.adoptionContractDao.save(adoptionContract);
    for (const animalHealth of this.fakeDataService.findAllAnimalHealths())
      this.firebaseService.animalHealthDao.save(animalHealth);
    for (const animal of this.fakeDataService.findAllAnimals())
      this.firebaseService.animalDao.save(animal);
    for (const enclosure of this.fakeDataService.findAllEnclosures())
      this.firebaseService.enclosureDao.save(enclosure);
    for (const shelter of this.fakeDataService.findAllShelters())
      this.firebaseService.shelterDao.save(shelter);
    console.log('End');
    //this.firebaseService.loadData();
  }
}
