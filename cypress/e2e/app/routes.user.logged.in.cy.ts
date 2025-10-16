/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight } from './enironments';

describe('logged in user sees ', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.loginAsUser(url);
  });

  afterEach(() => {
    cy.logout(url);
  });

  describe('not adopters page', () => {
    it('table', () => {
      cy.visit(url + 'adopters');
      cy.url().should('include', '/');
    });
    it('detail', () => {
      cy.visit(url + 'adopters/0ZxrwCKjmzNCJDgKQsnt');
      cy.url().should('include', '/');
    });
  });

  describe('not adoptionApplications page', () => {
    it('table', () => {
      cy.visit(url + 'adoptionApplications');
      cy.url().should('include', '/');
    });
    it('detail', () => {
      cy.visit(url + 'adoptionApplications/0buYMQy3LfyLvbHaMFPc');
      cy.url().should('include', '/');
    });
  });

  describe('not adoptionContracts page', () => {
    it('table', () => {
      cy.visit(url + 'adoptionContracts');
      cy.url().should('include', '/');
    });
    it('detail', () => {
      cy.visit(url + 'adoptionContracts/0GKISAxUN7KAMstLjhbT');
      cy.url().should('include', '/');
    });
  });

  describe('not animalHealths page', () => {
    it('table', () => {
      cy.visit(url + 'animalHealths');
      cy.url().should('include', '/');
    });
    it('detail', () => {
      cy.visit(url + 'animalHealths/00udpuwyUD9mh1qLadVg');
      cy.url().should('include', '/');
    });
  });

  describe('animals page', () => {
    it('table', () => {
      cy.visit(url + 'animals');
      cy.url().should('include', '/animals');
    });
    it('detail', () => {
      cy.visit(url + 'animals/0yXArq6neTuciUkmaMu3');
      cy.url().should('include', '/animals/0yXArq6neTuciUkmaMu3');
    });
  });

  describe('not enclosures page', () => {
    it('table', () => {
      cy.visit(url + 'enclosures');
      cy.url().should('include', '/');
    });
    it('detail', () => {
      cy.visit(url + 'enclosures/0lbgwPc0qWIY5pZjC9mw');
      cy.url().should('include', '/');
    });
  });

  describe('not shelters page', () => {
    it('table', () => {
      cy.visit(url + 'shelters');
      cy.url().should('include', '/');
    });
    it('detail', () => {
      cy.visit(url + 'shelters/0pHkrXyn5bXKVcS4bqYv');
      cy.url().should('include', '/');
    });
  });
});
