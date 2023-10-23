# Cypress Testing for Vuori Website

## Project Overview
This repository contains tests for the Vuori website using the Cypress testing framwork. The tests ensure the website operates consistently and optimally across different locales and environments.

## Project Structure

    ├── cypress
    │   ├── e2e
    │   │   ├── header
    │   │   │   ├── header.spec.cy.js
    │   │   │   └── search.spec.cy.js
    │   │   └── homepage
    │   │       └── homepage.spec.cy.js
    │   ├── fixtures
    │   │   ├── header
    │   │   │   └── searchData.json
    │   │   └── homepage
    │   │       └── homepageData.json
    │   ├── screenshots
    │   └── support
    │   │    ├── commands.js
    │   │    ├── constants.js
    │   │    ├── e2e.js
    │   │    └── utility.js
    |   └── videos
    ├── node_modules
    ├── cypress.config.js
    ├── package-lock.json
    └── package.json

## Utility Details
The `utility.js` file provides a utility class that assists with functionalities such as determining the base URL based on provided LOCALE and ENV settings. 

Supported locales include:
- en-au, en-ca, fr-fr, de-de, zh-hk, en-ie, es-mx, nl-nl, zh-sg, ar-ae, en-gb, en-us.

## Setup
1. Clone the repository:

```bash
git clone https://github.com/chrisbremmer/cypress-case-study.git
```

2. Navigate to the project directory:

```bash
cd cypress-case-study
```

3. Install the required dependencies:

```bash
npm install
```

## Running the Tests

To run the tests, you'll need to specify the `LOCALE` and `ENV` settings. Here's how you do it:

```bash
npx cypress run --env LOCALE=en-us,ENV=production
```

Repalce `en-us` with your desired locale and `production` with your desired environment.

*NOTE*: Only production has been used for these tests but future enhancements may include other supported environments.

Supported environments are:
- sandbox
- staging
- production

## Best Practices
- Always use the `Utility` class methods to fetch configurations or perform common functionalities.
- Refer to fixtures when asserting static data to ensure consistency.

## Reporting
After running the tests, Cypress will automatically generate detailed reports. These can be found in `cypress/videos` and `cypress/screenshots` directories, providing visual verification of each test run.

## Notes
- The JSON files in the `fixtures` directory are used for static test data. Ensure any