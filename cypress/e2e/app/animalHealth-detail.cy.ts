/// <reference types="cypress" />
import { url, viewportWidth, viewportHeight, fakeDataService } from './enironments';
import { AnimalHealth } from '../../../src/model/animalHealth';

const animalHealth: AnimalHealth = fakeDataService.animalHealths[0];
const testName = 'animalHealth-detail';

describe('AnimalHealth Detail Component Module', () => {
  beforeEach(() => {
    cy.viewport(viewportWidth, viewportHeight);
  });

  describe('create', () => {
    beforeEach(() => {
      cy.visit(url + 'animalHealths/create');
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/create', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Gesundheitsreport erstellen');
      cy.formControlEmpty('animalId');
      cy.formControlEmpty('date');
      cy.formControlEmpty('type');
      cy.formControlEmpty('notes');
      cy.formControlEmpty('vet');
      cy.formControlEmpty('meds');
      cy.hintsEmpty('0 / 60');
      cy.compareSnapshot(testName + '-create-snapshot', { overwrite: true });
    });
  });

  describe('edit', () => {
    beforeEach(() => {
      cy.visit(url + 'animalHealths/' + animalHealth.id);
      cy.formControl('name', animalHealth.animalId);
    });

    it('makes a screenshot', () => {
      cy.screenshot(testName + '/edit', { overwrite: true });
    });

    it('regresses to snapshot', () => {
      cy.h1('Gesundheitsreport bearbeiten');
      cy.formControl('animalId', animalHealth.animalId);
      cy.formControlDate('date', animalHealth.date);
      cy.formControl('type', animalHealth.type);
      cy.formControl('notes', animalHealth.notes);
      cy.formControl('vet', animalHealth.vet);
      //cy.formControl('meds', animalHealth.meds);
      cy.hints([
        animalHealth.notes.length + ' / 60',
        animalHealth.vet.length + ' / 60',
        animalHealth.meds.length + ' / 60',
      ]);
      cy.compareSnapshot(testName + '-edit-snapshot', { overwrite: true });
    });
  });
});
