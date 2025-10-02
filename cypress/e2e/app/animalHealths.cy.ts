/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { AnimalHealth } from '../../../src/model/animalHealth';

const animalHealth: AnimalHealth = fakeDataService.animalHealths[0];

describe('AnimalHealths Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.visit(url + 'animalHealths');
    cy.rowExists();
  });

  it('makes a screenshot', () => {
    cy.screenshot('animalHealths/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.row('animalId', animalHealth.animalId);
    cy.rowDate('date', animalHealth.date);
    cy.row('type', animalHealth.type);
    cy.row('notes', animalHealth.notes);
    cy.row('vet', animalHealth.vet);
    //cy.row('meds', animalHealth.meds);
    cy.compareSnapshot('animalHealths-snapshot', { overwrite: true });
  });
});
