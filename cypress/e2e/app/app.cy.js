/// <reference types="cypress" />

describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('displays a title', () => {
    cy.get('h1')
      .first()
      .invoke('text')
      .then((text) => {
        expect(text).to.eq('Hello, riewek-petshop-angular-material-firebase');
      });
  });

  it('displays firebase database entries', () => {
    cy.get('ul li').should('have.length', 2);
    cy.get('ul li').eq(0).should('contain.text', 'b');
    cy.get('ul li').eq(1).should('contain.text', 'a');
  });

  it('should display the toolbar with correct text', () => {
    cy.get('mat-toolbar').should('exist').and('contain.text', 'Material Demo');
  });

  it('should toggle the slide toggle', () => {
    cy.get('[data-cy=toggle-mode] button')
      .should('have.attr', 'aria-checked', 'false')
      .click()
      .should('have.attr', 'aria-checked', 'true')
      .click()
      .should('have.attr', 'aria-checked', 'false');
  });

  it('should have 4 buttons with correct text', () => {
    cy.get('button[mat-flat-button]').should('have.length', 4);
    cy.get('[data-cy=btn-primary]').should('contain.text', 'Primary');
    cy.get('[data-cy=btn-accent]').should('contain.text', 'Accent');
    cy.get('[data-cy=btn-warn]').should('contain.text', 'Warn');
    cy.get('[data-cy=btn-tertiary]').should('contain.text', 'Tertiary');
  });

  it('should have correct classes on buttons', () => {
    cy.get('button.root').should('contain.text', 'Warn');
    cy.get('button.custom-tertiary').should('contain.text', 'Tertiary');
  });
});
