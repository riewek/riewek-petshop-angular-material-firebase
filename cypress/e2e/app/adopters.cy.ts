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
    cy.get('tr[mat-row]').should('have.length.greaterThan', 0);
    cy.get('tr[mat-row]')
      .first()
      .find('td.mat-column-name')
      .should('have.text', 'Marion Langworth');
    cy.get('tr[mat-row]')
      .first()
      .find('td.mat-column-contact')
      .should('have.text', 'Cedrick23@gmail.com');
    cy.get('tr[mat-row]')
      .first()
      .find('td.mat-column-address')
      .should('have.text', '5933 Morar Pine, East Julianne, Wyoming, 91562');
    cy.get('tr[mat-row]').first().find('td.mat-column-housing').should('have.text', 'E');
    cy.get('tr[mat-row]').first().find('td.mat-column-experience').should('have.text', 'F');
    cy.compareSnapshot('adopters-snapshot', { overwrite: true });
  });
});
