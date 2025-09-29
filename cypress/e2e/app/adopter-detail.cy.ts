/// <reference types="cypress" />

import { url, viewportWidth, viewportHeight } from './enironments';
const testName = 'adopter-detail';

describe('Adopter Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'adopters/create');
    });
    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });
    it('regresses to snapshot', () => {
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true,  });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'adopters/0ZxrwCKjmzNCJDgKQsnt');
    });
    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });
    it('regresses to snapshot', () => {
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
