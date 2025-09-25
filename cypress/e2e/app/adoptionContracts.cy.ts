/// <reference types="cypress" />

describe('AdoptionContracts Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:4200/adoptionContracts');
  });

  it('makes a screenshot', () => {
    cy.screenshot('adoptionContracts/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('adoptionContracts-snapshot', { overwrite: true });
  });
});
