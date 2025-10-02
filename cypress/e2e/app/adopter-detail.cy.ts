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
      cy.get('h1')
        .should('exist')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.equal('Interessent erstellen');
        });
      cy.get('input[formControlName="name"]').should('have.value', '');
      cy.get('input[formControlName="contact"]').should('have.value', '');
      cy.get('input[formControlName="address"]').should('have.value', '');
      cy.get('input[formControlName="housing"]').should('have.value', '');
      cy.get('input[formControlName="experience"]').should('have.value', '');
      cy.get('mat-hint').each(($hint) => {
        cy.wrap($hint).contains('0 / 60');
      });
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
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
      cy.get('h1')
        .should('exist')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.equal('Interessent bearbeiten');
        });
      cy.get('input[formControlName="name"]').should('have.value', 'Marion Langworth');
      cy.get('input[formControlName="contact"]').should('have.value', 'Cedrick23@gmail.com');
      cy.get('input[formControlName="address"]').should(
        'have.value',
        '5933 Morar Pine, East Julianne, Wyoming, 91562'
      );
      cy.get('input[formControlName="housing"]').should('have.value', 'E');
      cy.get('input[formControlName="experience"]').should('have.value', 'F');
      let results = ['16 / 60', '19 / 60', '46 / 60', '1 / 60', '1 / 60'];
      let i = 0;
      cy.get('mat-hint').each(($hint) => {
        cy.wrap($hint).contains(results[i]);
        i++;
      });
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
