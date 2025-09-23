/// <reference types="cypress" />

describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('makes a screenshot', () => {
    cy.screenshot('app/app', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('app-snapshot', { overwrite: true });
  });
});
