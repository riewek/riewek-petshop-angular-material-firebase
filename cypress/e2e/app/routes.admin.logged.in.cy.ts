/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight } from './enironments';

describe('logged in admin sees ', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.loginAsAdmin(url);
  });

  afterEach(() => {
    cy.logout(url);
  });

  describe('adopters page', () => {
    it('table', () => {
      cy.visit(url + 'adopters');
      cy.url().should('include', '/adopters');
    });
    it('detail', () => {
      cy.visit(url + 'adopters/0ZxrwCKjmzNCJDgKQsnt');
      cy.url().should('include', '/adopters/0ZxrwCKjmzNCJDgKQsnt');
    });
  });

  describe('adoptionApplications page', () => {
    it('table', () => {
      cy.visit(url + 'adoptionApplications');
      cy.url().should('include', '/adoptionApplications');
    });
    it('detail', () => {
      cy.visit(url + 'adoptionApplications/0buYMQy3LfyLvbHaMFPc');
      cy.url().should('include', '/adoptionApplications/0buYMQy3LfyLvbHaMFPc');
    });
  });

  describe('adoptionContracts page', () => {
    it('table', () => {
      cy.visit(url + 'adoptionContracts');
      cy.url().should('include', '/adoptionContracts');
    });
    it('detail', () => {
      cy.visit(url + 'adoptionContracts/0GKISAxUN7KAMstLjhbT');
      cy.url().should('include', '/adoptionContracts/0GKISAxUN7KAMstLjhbT');
    });
  });

  describe('animalHealths page', () => {
    it('table', () => {
      cy.visit(url + 'animalHealths');
      cy.url().should('include', '/animalHealths');
    });
    it('detail', () => {
      cy.visit(url + 'animalHealths/00udpuwyUD9mh1qLadVg');
      cy.url().should('include', '/animalHealths/00udpuwyUD9mh1qLadVg');
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

  describe('enclosures page', () => {
    it('table', () => {
      cy.visit(url + 'enclosures');
      cy.url().should('include', '/enclosures');
    });
    it('detail', () => {
      cy.visit(url + 'enclosures/0lbgwPc0qWIY5pZjC9mw');
      cy.url().should('include', '/enclosures/0lbgwPc0qWIY5pZjC9mw');
    });
  });

  describe('shelters page', () => {
    it('table', () => {
      cy.visit(url + 'shelters');
      cy.url().should('include', '/shelters');
    });
    it('detail', () => {
      cy.visit(url + 'shelters/0pHkrXyn5bXKVcS4bqYv');
      cy.url().should('include', '/shelters/0pHkrXyn5bXKVcS4bqYv');
    });
  });
});
