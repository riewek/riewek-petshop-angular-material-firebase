/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { Adopter } from '../../../src/model/adopter';

const adopter: Adopter = fakeDataService.adopters[0];

describe('Adopters Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.visit(url + 'adopters');
    cy.rowExists();
  });

  it('makes a screenshot', () => {
    cy.screenshot('adopters/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.row('name', adopter.name);
    cy.row('contact', adopter.contact);
    cy.row('address', adopter.address);
    cy.row('housing', adopter.housing);
    cy.row('experience', adopter.experience);
    cy.compareSnapshot('adopters-snapshot', { overwrite: true });
  });
});
