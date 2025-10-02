/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { Animal } from '../../../src/model/animal';

const animal: Animal = fakeDataService.animals[0];

describe('Animals Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.visit(url + 'animals');
    cy.rowExists();
  });

  it('makes a screenshot', () => {
    cy.screenshot('animals/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.row('species', animal.species);
    cy.row('breed', animal.breed);
    cy.rowDate('birthDate', animal.birthDate);
    cy.row('sex', animal.sex);
    cy.rowDate('intakeDate', animal.intakeDate);
    cy.row('healthStatus', animal.healthStatus);
    cy.row('enclosureId', animal.enclosureId);
    //cy.row('photos', animal.photos);
    //cy.row('adoptable', animal.adoptable);
    cy.compareSnapshot('animals-snapshot', { overwrite: true });
  });
});
