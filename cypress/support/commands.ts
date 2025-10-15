/// <reference types="cypress" />

import { dateDe, dateEn } from '../../src/shared/utils';

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
      loginAsAdmin(url: string): void;
      loginAsUser(url: string): void;
      logout(url: string): void;
      visitSafe(url: string, page: string): void;
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      dataCy2(value: string, value2: string): Chainable<JQuery<HTMLElement>>;
      h1(text: string): void;
      formControlEmpty(formControl: string): void;
      formControl(formControl: string, value: string): void;
      formControlDate(formControl: string, value: Date): void;
      formControlDateToday(formControl: string): void;
      formControlSelect(formControl: string, value: string): void;
      formControlSelectEmpty(formControl: string): void;
      formControlRadio(formControl: string, value: string): void;
      rowExists(): void;
      row(formControl: string, value: string): void;
      rowDate(formControl: string, value: Date): void;
      hints(hints: string[]): void;
      hintsEmpty(emptyHint: string): void;
    }
  }
}
Cypress.Commands.add('loginAsAdmin', (url: string) => {
  cy.visit(url + 'login');
  cy.dataCy('btn-login-test-admin').click();
  cy.url({ timeout: 10000 }).should('not.include', '/login');
  cy.get('app-dashboard', { timeout: 10000 }).should('exist');
  //cy.window().its('firebase.auth().currentUser', { timeout: 10000 }).should('exist');
});
Cypress.Commands.add('loginAsUser', (url: string) => {
  cy.visit(url + 'login');
  cy.dataCy('btn-login-test-user').click();
});
Cypress.Commands.add('logout', (url: string) => {
  cy.visit(url + 'logout');
  cy.dataCy('btn-logout').click();
});
Cypress.Commands.add('visitSafe', (url: string, page: string) => {
  cy.visit(url + page);
  cy.url().should('include', '/' + page);
});
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
Cypress.Commands.add('formControlDate', (formControl: string, date: Date) => {
  cy.get('input[formControlName="' + formControl + '"]').should('have.value', dateDe(date));
});
Cypress.Commands.add('formControlDateToday', (formControl: string) => {
  cy.get('input[formControlName="' + formControl + '"]').should('have.value', dateEn(new Date()));
});
Cypress.Commands.add('formControlSelect', (formControl: string, expectedValue: string) => {
  cy.get(`mat-select[formControlName="${formControl}"] .mat-mdc-select-value-text`).should(
    'contain.text',
    expectedValue
  );
});
Cypress.Commands.add('formControlSelectEmpty', (formControl: string) => {
  cy.get(`mat-select[formControlName="${formControl}"] .mat-mdc-select-value-text`, {
    timeout: 10000,
  })
    .should('not.be.empty')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal('');
    });
});
Cypress.Commands.add('formControlRadio', (formControl: string, value: string) => {
  cy.get('mat-radio-group[formcontrolname="status"]').then(($group) => {
    cy.wrap($group).should(() => {
      const checkedValue = $group.find('input[type="radio"]:checked').val();
      expect(checkedValue).to.eq('rejected');
    });
  });
  //cy.get(`mat-radio-group[formControlName="${formControl}"] input[type="radio"]`, {
  //    timeout: 10000,
  //}).should(($inputs) => {
  //    const checked = $inputs.filter(':checked').val();
  //  console.log('checked', checked);
  //    console.log('value', value);
  //  expect(checked).to.equal(value);
  //});
  //cy.wait(1000);
  //cy.get(
  //    `mat-radio-group[formControlName="${formControl}"] mat-radio-button.mat-mdc-radio-checked`,
  //{
  //    timeout: 10000;
  //}
  //).should('have.attr', 'value', value);
  //cy.get(`mat-radio-group[formControlName="${formControl}"]`, { timeout: 10000 }).should(
  //($group) => {
  //const checked = $group.find('input[type="radio"]:checked').val();
  //expect(checked).to.equal(value);
  //}
  //);
  //cy.get(`mat-radio-group[formControlName="${formControl}"] input[type="radio"]:checked`)
  //    .invoke('val')
  //  .then((text) => {
  //  expect(text).to.equal(value);
  //});
});
Cypress.Commands.add('rowExists', () => {
  cy.get('table[mat-table]', { timeout: 10000 }).should('exist');
  cy.get('tr[mat-row]', { timeout: 10000 }).should('have.length.greaterThan', 0);
});
Cypress.Commands.add('row', (formControl: string, value: string) => {
  cy.get('tr[mat-row]')
    .first()
    .find('td.mat-column-' + formControl)
    .should('have.text', value);
});
Cypress.Commands.add('rowDate', (formControl: string, date: Date) => {
  cy.get('tr[mat-row]')
    .first()
    .find('td.mat-column-' + formControl)
    .should('contain.text', dateDe(date));
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
