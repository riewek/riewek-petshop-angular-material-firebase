# Setup

## Setup Angular

- zoneless, signals werden überall genutzt
- scss
- kein ssr

## Setup Firebase

https://github.com/angular/angularfire/blob/main/docs/install-and-setup.md

Firebase Deployment

- firebase init hosting
- firebase.json/"public": "dist/riewek-petshop-angular-firebase/browser",
- firebase deploy --only hosting

Firebase Emulators

- firebase init emulators
- firebase emulators:start

AngularFirestore

- Besser zum mocken als Firestore
- firebase.config.ts: AngularFirestore registrieren

## Setup Angular Material

- styles.scss

## Setup Jest instead of Karma/Jasmine

- https://medium.com/@abhijit_chikane/set-up-jest-in-angular-v20-project-zoneless-replace-karma-jasmine-5ddd5552f2cb

## Setup Cypress

Cypress hinzufügen

- npm install --save-dev cypress@15.2.0
- npm install -D @angular-devkit/build-angular --legacy-peer-deps
- npm install -D @angular/platform-browser-dynamic --legacy-peer-deps
- npm install -D cypress-visual-regression --legacy-peer-deps
- https://github.com/cypress-visual-regression/cypress-visual-regression

## Setup Lint

- npm install --save-dev @angular-eslint/schematics @angular-eslint/builder --legacy-peer-deps
- npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --legacy-peer-deps
- npm install --save-dev @angular-eslint/builder @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser --legacy-peer-deps

## Setup Faker

- npm install @faker-js/faker --save-dev --legacy-peer-deps

## Ports

| Frontend    | Host:Port                               |
| ----------- | --------------------------------------- |
| Local       | http://localhost:4200/                  |
| Local Login | http://localhost:4200/login             |
| Prod        | https://petshop-firebase-3a57b.web.app/ |

| Emulator         | Host:Port              | View in Emulator UI                             |
| ---------------- | ---------------------- | ----------------------------------------------- |
| View Emulator UI | http://localhost:4000/ | [View Emulator UI](http://127.0.0.1:4000/)      |
| Authentication   | 127.0.0.1:9099         | [Auth UI](http://127.0.0.1:4000/auth)           |
| Firestore        | 127.0.0.1:8080         | [Firestore UI](http://127.0.0.1:4000/firestore) |

| Cypress                        | Host:Port |
| ------------------------------ | --------- |
| Cypress Component Testing (CT) | Random    |

# RiewekPetshopAngularFirebase

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
