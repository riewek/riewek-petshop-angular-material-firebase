/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';

const adopter = fakeDataService.adopterId('0ZxrwCKjmzNCJDgKQsnt');
const testName = 'adopter-detail';

describe('Adopter Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.loginAsAdmin(url);
  });

  afterEach(() => {
    cy.logout(url);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visitSafe(url, 'adopters/create');
      cy.formControlEmpty('name');
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Interessent erstellen');
      cy.formControlEmpty('name');
      cy.formControlEmpty('contact');
      cy.formControlEmpty('address');
      cy.formControlEmpty('housing');
      cy.formControlEmpty('experience');
      cy.hintsEmpty('0 / 60');
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visitSafe(url, 'adopters/' + adopter.id);
      cy.formControl('name', adopter.name);
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Interessent bearbeiten');
      cy.formControl('name', adopter.name);
      cy.formControl('contact', adopter.contact);
      cy.formControl('address', adopter.address);
      cy.formControl('housing', adopter.housing);
      cy.formControl('experience', adopter.experience);
      cy.hints([
        adopter.name.length + ' / 60',
        adopter.contact.length + ' / 60',
        adopter.address.length + ' / 60',
        adopter.housing.length + ' / 60',
        adopter.experience.length + ' / 60',
      ]);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
