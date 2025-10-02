/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { Animal } from '../../../src/model/animal';

const animal: Animal = fakeDataService.animals[0];
const testName = 'animal-detail';

describe('Animal Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'animals/create');
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Tier erstellen');
      cy.formControlEmpty('species');
      cy.formControlEmpty('breed');
      cy.formControlEmpty('birthDate');
      cy.formControlEmpty('sex');
      cy.formControlEmpty('intakeDate');
      cy.formControlEmpty('healthStatus');
      cy.formControlEmpty('enclosureId');
      cy.formControlEmpty('photos');
      cy.formControlEmpty('adoptable');
      cy.hintsEmpty('0 / 60');
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'animals/' + animal.id);
      cy.formControl('name', animal.species);
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Tier bearbeiten');
      cy.formControl('species', animal.species);
      cy.formControl('breed', animal.breed);
      cy.formControlDate('birthDate', animal.birthDate);
      cy.formControl('sex', animal.sex);
      cy.formControlDate('intakeDate', animal.intakeDate);
      cy.formControl('healthStatus', animal.healthStatus);
      cy.formControl('enclosureId', animal.enclosureId);
      //cy.formControl('adoptable', animal.adoptable); //FIXME checkbox
      cy.hints([animal.species.length + ' / 60', animal.breed.length + ' / 60']);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
