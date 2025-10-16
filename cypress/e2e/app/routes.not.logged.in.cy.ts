/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight } from './enironments';

describe('not logged in redirects to login', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('adopters page', () => {
    it('table', () => {
      cy.visit(url + 'adopters');
      cy.url().should('include', '/login');
    });
    it('detail', () => {
      cy.visit(url + 'adopters/A');
      cy.url().should('include', '/login');
    });
  });

  describe('adoptionApplications page', () => {
    it('table', () => {
      cy.visit(url + 'adoptionApplications');
      cy.url().should('include', '/login');
    });
    it('detail', () => {
      cy.visit(url + 'adoptionApplications/A');
      cy.url().should('include', '/login');
    });
  });

  describe('adoptionContracts page', () => {
    it('table', () => {
      cy.visit(url + 'adoptionContracts');
      cy.url().should('include', '/login');
    });
    it('detail', () => {
      cy.visit(url + 'adoptionContracts/A');
      cy.url().should('include', '/login');
    });
  });

  describe('animalHealths page', () => {
    it('table', () => {
      cy.visit(url + 'animalHealths');
      cy.url().should('include', '/login');
    });
    it('detail', () => {
      cy.visit(url + 'animalHealths/A');
      cy.url().should('include', '/login');
    });
  });

  describe('animals page', () => {
    it('table', () => {
      cy.visit(url + 'animals');
      cy.url().should('include', '/login');
    });
    it('detail', () => {
      cy.visit(url + 'animals/A');
      cy.url().should('include', '/login');
    });
  });

  describe('enclosures page', () => {
    it('table', () => {
      cy.visit(url + 'enclosures');
      cy.url().should('include', '/login');
    });
    it('detail', () => {
      cy.visit(url + 'enclosures/A');
      cy.url().should('include', '/login');
    });
  });

  describe('shelters page', () => {
    it('table', () => {
      cy.visit(url + 'shelters');
      cy.url().should('include', '/login');
    });
    it('detail', () => {
      cy.visit(url + 'shelters/A');
      cy.url().should('include', '/login');
    });
  });
});
