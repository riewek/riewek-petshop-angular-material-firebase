/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';

const adoptionApplication = fakeDataService.adoptionApplicationId('0buYMQy3LfyLvbHaMFPc');
const testName = 'adoptionApplication-detail';

describe('AdoptionApplication Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
    cy.loginAsAdmin(url);
  });

  afterEach(() => {
    cy.logout(url);
  });

  describe('create', () => {
    beforeEach(() => {
      //cy.intercept('**/google.firestore.v1.Firestore/Listen/channel**').as('firestoreListen');
      cy.visitSafe(url, 'adoptionApplications/create');
      //cy.wait('@firestoreListen');
    });

    xit('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      //cy.dataCy('loading-spinner').should('not.exist');
      //cy.get('form').should('exist');
      //cy.get('form').should('be.visible');
      cy.window().then((win) => {
        return new Cypress.Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            win.removeEventListener('loadingStopped', listener);
            reject(new Error('Timeout waiting for loadingStopped event'));
          }, 10000);

          const listener = () => {
            clearTimeout(timeout);
            win.removeEventListener('loadingStopped', listener);
            resolve();
          };

          win.addEventListener('loadingStopped', listener);
        });
      }); //cy.window().then((win) => {
      //return new Cypress.Promise((resolve) => {
      //win.addEventListener('loadingStopped', resolve);
      //});
      //});
      cy.h1('Antrag erstellen');
      //cy.formControlSelectEmpty('adopterId');
      //cy.formControlSelectEmpty('animalId');
      //cy.formControlDateToday('createdAt');
      cy.formControlRadio('status', 'submitted');
      //cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  xdescribe('edit', () => {
    beforeEach(() => {
      cy.intercept('**/google.firestore.v1.Firestore/Listen/channel**').as('firestoreListen');
      cy.visitSafe(url, 'adoptionApplications/' + adoptionApplication.id);
      cy.wait('@firestoreListen');
    });

    xit('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.get('[data-cy="loading-spinner"]', { timeout: 10000 }).should('not.exist');
      cy.h1('Antrag bearbeiten');
      //cy.formControlSelect('adopterId', adoptionApplication.adopterId);
      //cy.formControlSelect('animalId', adoptionApplication.animalId);
      //cy.formControlDate('createdAt', adoptionApplication.createdAt);
      cy.formControlRadio('status', adoptionApplication.status);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
