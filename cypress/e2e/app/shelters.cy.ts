/// <reference types="cypress" />

describe('Shelters Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:4200/shelters');
  });

  it('makes a screenshot', () => {
    cy.screenshot('shelters/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('shelters-snapshot', { overwrite: true });
  });
});
