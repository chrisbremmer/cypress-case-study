import { Utility } from "./utility";
import { MENU_SELECTORS } from "./constants";

// This command closes the sign-up form pop-up
Cypress.Commands.add("closeSignUpForm", () => {
  cy.get(".klaviyo-close-form").click({ force: true });
});

// This command closes the locale dialog if the set locale is not "en-us"
Cypress.Commands.add("closeLocaleDialog", () => {
  if (Cypress.env("LOCALE") !== "en-us") {
    cy.get(
      '.MuiDialog-container > .MuiPaper-root > .MuiIconButton-root > [data-testid="CloseIcon"] > path'
    ).click();
  }
});

// Initializes the search functionality by visiting the base URL and then clikcing on the search icon
Cypress.Commands.add("initializeSearch", () => {
  cy.getBaseURL().then((url) => {
    cy.visit(url); // Use the fetched URL from getBaseURL
    cy.closeLocaleDialog();
    cy.get(MENU_SELECTORS.SEARCH).click();
  });
});

Cypress.Commands.add("getBaseURL", () => {
  const utilityInstance = new Utility();
  return utilityInstance.getBaseUrl();
});
