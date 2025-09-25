/// <reference types="cypress" />

describe('Adopters Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:4200/adopters');
  });

  it('makes a screenshot', () => {
    cy.screenshot('adopters/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('adopters-snapshot', { overwrite: true });
  });
});
