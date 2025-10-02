/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { AdoptionApplication } from '../../../src/model/adoptionApplication';

const adoptionApplication: AdoptionApplication = fakeDataService.adoptionApplications[0];

describe('AdoptionApplications Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.visit(url + 'adoptionApplications');
    cy.rowExists();
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
    cy.row('status', adoptionApplication.status);
    cy.compareSnapshot('adoptionApplications-snapshot', { overwrite: true });
  });
});
