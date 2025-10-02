/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { AdoptionContract } from '../../../src/model/adoptionContract';

const adoptionContract: AdoptionContract = fakeDataService.adoptionContracts[0];
const testName = 'adoptionContract-detail';

describe('AdoptionContract Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'adoptionContracts/create');
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Vertrag erstellen');
      cy.formControlEmpty('adoptionApplicationId');
      cy.formControlEmpty('contractUrl');
      cy.formControlEmpty('signedAt');
      cy.formControlEmpty('fee');
      cy.hintsEmpty('0 / 60');
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'adoptionContracts/' + adoptionContract.id);
      cy.formControl('name', adoptionContract.adoptionApplicationId);
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Vertrag bearbeiten');
      cy.formControl('adoptionApplicationId', adoptionContract.adoptionApplicationId);
      cy.formControl('contractUrl', adoptionContract.contractUrl);
      cy.formControlDate('signedAt', adoptionContract.signedAt);
      cy.formControl('fee', adoptionContract.fee + '');
      cy.hints([
        adoptionContract.contractUrl.length + ' / 60',
        (adoptionContract.fee + '').length + ' / 60',
      ]);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
