/// <reference types="cypress" />

describe('AdoptionApplications Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:4200/adoptionApplications');
  });

  it('makes a screenshot', () => {
    cy.screenshot('adoptionApplications/home', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.compareSnapshot('adoptionApplications-snapshot', { overwrite: true });
  });
});
