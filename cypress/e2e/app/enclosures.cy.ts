/// <reference types="cypress" />

describe('Enclosures Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:4200/enclosures');
  });

  it('makes a screenshot', () => {
    cy.screenshot('enclosures/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('enclosures-snapshot', { overwrite: true });
  });
});
