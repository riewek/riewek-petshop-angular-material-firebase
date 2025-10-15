/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { getIcon } from '../../../src/shared/utils';

const adoptionApplication = fakeDataService.adoptionApplicationId('0buYMQy3LfyLvbHaMFPc');

describe('AdoptionApplications Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.loginAsAdmin(url);
    cy.visit(url + 'adoptionApplications');
    cy.url().should('include', '/adoptionApplications');
    cy.rowExists();
  });

  afterEach(() => {
    cy.logout(url);
  });

  it('makes a screenshot', () => {
    cy.screenshot('adoptionApplications/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    //cy.row('adopterId', adoptionApplication.adopterId);
    //cy.row('animalId', adoptionApplication.animalId);
    cy.row('adopterId', 'arrow_forward');
    cy.row('animalId', 'arrow_forward');
    cy.rowDate('createdAt', adoptionApplication.createdAt);
    cy.row('status', getIcon('model.adoptionApplication.status', adoptionApplication.status));
    cy.compareSnapshot('adoptionApplications-snapshot', { overwrite: true });
  });
});
