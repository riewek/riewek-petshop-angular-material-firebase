/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { AdoptionContract } from '../../../src/model/adoptionContract';

const adoptionContract: AdoptionContract = fakeDataService.adoptionContracts[0];

describe('AdoptionContracts Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.visit(url + 'adoptionContracts');
    cy.rowExists();
  });

  it('makes a screenshot', () => {
    cy.screenshot('adoptionContracts/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.row('adoptionApplicationId', adoptionContract.adoptionApplicationId);
    cy.row('contractUrl', adoptionContract.contractUrl);
    cy.rowDate('signedAt', adoptionContract.signedAt);
    cy.row('fee', adoptionContract.fee + '');
    cy.compareSnapshot('adoptionContracts-snapshot', { overwrite: true });
  });
});
