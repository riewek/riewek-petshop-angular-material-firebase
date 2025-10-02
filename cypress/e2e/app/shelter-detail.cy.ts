/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { Shelter } from '../../../src/model/shelter';

const shelter: Shelter = fakeDataService.shelters[0];
const testName = 'shelter-detail';

describe('Shelter Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'shelters/create');
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Tierheim erstellen');
      cy.formControlEmpty('name');
      cy.formControlEmpty('location');
      cy.formControlEmpty('enclosureIds');
      cy.hintsEmpty('0 / 60');
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'shelters/' + shelter.id);
      cy.formControl('name', shelter.name);
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Tierheim bearbeiten');
      cy.formControl('name', shelter.name);
      cy.formControl('location', shelter.location);
      //cy.formControl('enclosureIds', shelter.enclosureIds);
      cy.hints([shelter.name.length + ' / 60', shelter.location.length + ' / 60']);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
