import { MENU_SELECTORS, NAVIGATION_CONFIG } from "../../support/constants";

// Group of tests targeting the website's header functionality
describe("Header Tests", () => {
  // Setup steps to be executed before each individual test
  beforeEach(() => {
    // Fetch the base URL and visit the page
    cy.getBaseURL().then((url) => {
      cy.visit(url);
      // Close the locale dialog if it appears
      cy.closeLocaleDialog();
    });
  });
  // Test to ensure the website logo is visible
  it("should display the logo", () => {
    cy.get('a > svg[data-testid="logo"]').should("be.visible");
  });
  // Test to ensure all menu items are visible
  it("should display menu items", () => {
    Object.values(MENU_SELECTORS).forEach((item) => {
      cy.get(item).should("be.visible");
    });
  });
  // Test to ensure each menu item navigates to the correct URL when clicked
  NAVIGATION_CONFIG.forEach((data) => {
    it(`should navigate to the ${data.description} when clicking on the menu item`, () => {
      cy.get(data.selector).click();
      cy.url().should("include", data.url);
    });
  });
  // Test to ensure the search dropdown appears when the search menu item is clicked
  it('should display search drop down when clicking on the "Search" menu item', () => {
    cy.get(MENU_SELECTORS.SEARCH).click();
    cy.get('[role="combobox"][aria-haspopup="listbox"]').should("be.visible");
  });
  // Test to ensure the cart model appears wehn the bag menu item is clicked+
  it('should display cart model when clicking the "Bag" menu item', () => {
    cy.get(MENU_SELECTORS.BAG).click();
    cy.get('[data-testid="cartempty-title-wrapper"]').should("be.visible");
  });
});
