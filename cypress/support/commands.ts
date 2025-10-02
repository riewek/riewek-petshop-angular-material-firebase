/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      dataCy2(value: string, value2: string): Chainable<JQuery<HTMLElement>>;
      h1(text: string): void;
      formControlEmpty(formControl: string): void;
      formControl(formControl: string, value: string): void;
      rowExists(): void;
      row(formControl: string, value: string): void;
      hints(hints: string[]): void;
      hintsEmpty(emptyHint: string): void;
    }
  }
}

Cypress.Commands.add('dataCy', (value: string) => {
  return cy.get(`[data-cy=${value}]`);
});
Cypress.Commands.add('dataCy2', (value: string, value2: string) => {
  return cy.get(`[data-cy=${value}] ${value2}`);
});
Cypress.Commands.add('h1', (value: string) => {
  cy.get('h1')
    .should('exist')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal(value);
    });
});
Cypress.Commands.add('formControlEmpty', (formControl: string) => {
  cy.get('input[formControlName="' + formControl + '"]').should('have.value', '');
});
Cypress.Commands.add('formControl', (formControl: string, value: string) => {
  cy.get('input[formControlName="' + formControl + '"]').should('have.value', value);
});
Cypress.Commands.add('rowExists', () => {
  cy.get('tr[mat-row]').should('have.length.greaterThan', 0);
});
Cypress.Commands.add('row', (formControl: string, value: string) => {
  cy.get('tr[mat-row]')
    .first()
    .find('td.mat-column-' + formControl)
    .should('have.text', value);
});
Cypress.Commands.add('hints', (hints: string[]) => {
  let i = 0;
  cy.get('mat-hint').each(($hint) => {
    cy.wrap($hint).contains(hints[i]);
    i++;
  });
});
Cypress.Commands.add('hintsEmpty', (emptyHint: string) => {
  cy.get('mat-hint').each(($hint) => {
    cy.wrap($hint).contains(emptyHint);
  });
});

export {};
