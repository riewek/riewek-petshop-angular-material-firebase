/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { Shelter } from '../../../src/model/shelter';

const shelter: Shelter = fakeDataService.shelters[0];

describe('Shelters Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.visit(url + 'shelters');
    cy.rowExists();
  });

  it('makes a screenshot', () => {
    cy.screenshot('shelters/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.row('name', shelter.name);
    cy.row('location', shelter.location);
    //cy.row('enclosureIds', shelter.enclosureIds);
    cy.compareSnapshot('shelters-snapshot', { overwrite: true });
  });
});
