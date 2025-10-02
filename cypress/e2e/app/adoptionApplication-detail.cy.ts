/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { AdoptionApplication } from '../../../src/model/adoptionApplication';

const adoptionApplication: AdoptionApplication = fakeDataService.adoptionApplications[0];
const testName = 'adoptionApplication-detail';

describe('AdoptionApplication Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'adoptionApplications/create');
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Antrag erstellen');
      cy.formControlEmpty('adopterId');
      cy.formControlEmpty('animalId');
      cy.formControlEmpty('createdAt');
      cy.formControlEmpty('status');
      cy.hintsEmpty('0 / 60');
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'adoptionApplications/' + adoptionApplication.id);
      cy.formControl('name', adoptionApplication.adopterId);
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Antrag bearbeiten');
      cy.formControl('adopterId', adoptionApplication.adopterId);
      cy.formControl('animalId', adoptionApplication.animalId);
      cy.formControlDate('createdAt', adoptionApplication.createdAt);
      cy.formControl('status', adoptionApplication.status);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
