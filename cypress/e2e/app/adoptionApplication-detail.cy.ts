/// <reference types="cypress" />

import { url, viewportWidth, viewportHeight } from './enironments';
const testName = 'adoptionApplication-detail';

describe('Adoption Applications Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'adoptionApplications/create');
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
      cy.visit(url + 'adoptionApplications/qtPWvxsElErb1poSOs6U');
    });
    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });
    it('regresses to snapshot', () => {
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
