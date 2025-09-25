/// <reference types="cypress" />

describe('AnimalHealths Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:4200/animalHealths');
  });

  it('makes a screenshot', () => {
    cy.screenshot('animalHealths/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('animalHealths-snapshot', { overwrite: true });
  });
});
