/// <reference types="cypress" />

describe('Animals Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:4200/animals');
  });

  it('makes a screenshot', () => {
    cy.screenshot('app/animals', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('animals-snapshot', { overwrite: true });
  });
});
