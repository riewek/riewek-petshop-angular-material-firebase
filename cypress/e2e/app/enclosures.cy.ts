/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { Enclosure } from '../../../src/model/enclosure';

const enclosure: Enclosure = fakeDataService.enclosures[0];

describe('Enclosures Component', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.visit(url + 'enclosures');
    cy.rowExists();
  });

  it('makes a screenshot', () => {
    cy.screenshot('enclosures/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.row('name', enclosure.name);
    cy.row('type', enclosure.type);
    cy.row('capacity', enclosure.capacity + '');
    cy.row('occupied', enclosure.occupied + '');
    cy.row('notes', enclosure.notes);
    cy.compareSnapshot('enclosures-snapshot', { overwrite: true });
  });
});
