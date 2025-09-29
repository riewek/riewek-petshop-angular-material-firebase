/// <reference types="cypress" />

import { url, viewportWidth, viewportHeight } from './enironments';
const testName = 'animalHealth-detail';

describe('Animal Health Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'animalHealths/create');
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
      cy.visit(url + 'animalHealths/gFc4GO2MQqtCRp9GoF1q');
    });
    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });
    it('regresses to snapshot', () => {
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
