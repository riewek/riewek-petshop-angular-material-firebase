/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { Enclosure } from '../../../src/model/enclosure';

const enclosure: Enclosure = fakeDataService.enclosures[0];
const testName = 'enclosure-detail';

describe('Enclosure Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'enclosures/create');
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Gehege erstellen');
      cy.formControlEmpty('name');
      cy.formControlEmpty('type');
      cy.formControlEmpty('capacity');
      cy.formControlEmpty('occupied');
      cy.formControlEmpty('notes');
      cy.hintsEmpty('0 / 60');
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'enclosures/' + enclosure.id);
      cy.formControl('name', enclosure.name);
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Gehege bearbeiten');
      cy.formControl('name', enclosure.name);
      cy.formControl('type', enclosure.type);
      cy.formControl('capacity', enclosure.capacity + '');
      cy.formControl('occupied', enclosure.occupied + '');
      cy.formControl('notes', enclosure.notes);
      cy.hints([
        enclosure.name.length + ' / 60',
        (enclosure.capacity + '').length + ' / 60',
        (enclosure.occupied + '').length + ' / 60',
        enclosure.notes.length + ' / 60',
      ]);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
