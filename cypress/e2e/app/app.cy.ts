/// <reference types="cypress" />
const enum DataCy {
  BtnPrimary = 'btn-primary',
  BtnAccent = 'btn-accent',
  BtnWarn = 'btn-warn',
  BtnTertiary = 'btn-tertiary',
  ToggleMode = 'toggle-mode',
}

describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('makes a screenshot', () => {
    cy.get('ul li').should('have.length', 2);
    cy.screenshot('app/app', { overwrite: true });
  });

  it('regresses to snapshot', () => {
    cy.get('ul li').should('have.length', 2);
    cy.compareSnapshot('app-snapshot', { overwrite: true });
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
    cy.dataCy2(DataCy.ToggleMode, 'button')
      .should('have.attr', 'aria-checked', 'false')
      .click()
      .should('have.attr', 'aria-checked', 'true')
      .click()
      .should('have.attr', 'aria-checked', 'false');
  });

  it('should have 4 buttons with correct text', () => {
    cy.get('button[mat-flat-button]').should('have.length', 4);
    cy.dataCy(DataCy.BtnPrimary).should('contain.text', 'Primary');
    cy.dataCy(DataCy.BtnAccent).should('contain.text', 'Accent');
    cy.dataCy(DataCy.BtnWarn).should('contain.text', 'Warn');
    cy.dataCy(DataCy.BtnTertiary).should('contain.text', 'Tertiary');
  });

  it('should have correct classes on buttons', () => {
    cy.get('button.root').should('contain.text', 'Warn');
    cy.get('button.custom-tertiary').should('contain.text', 'Tertiary');
  });
});
