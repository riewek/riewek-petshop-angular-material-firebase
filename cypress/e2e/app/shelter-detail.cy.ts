/// <reference types="cypress" />

import { url, viewportWidth, viewportHeight } from './enironments';
const testName = 'adopter-detail';

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
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'shelters/nHXbYy85GH8I3uVAow5G');
    });
    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });
    it('regresses to snapshot', () => {
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
