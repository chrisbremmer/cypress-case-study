import { SEARCH_SELECTORS } from "../../support/constants";

// Group of tests targeting the website's search functionality
describe("Search Tests", () => {
  let searchData;
  let baseURL;
  // Setup steps to be executed before all tests in the group
  before(() => {
    // Fetch tets data from fixture file
    cy.fixture("header/searchData.json").then((data) => {
      searchData = data;
    });
    // Fetch the base URL for later use in tests
    cy.getBaseURL().then((url) => {
      baseURL = url;
    });
  });
  // Setup steps to be executed before each individual test
  beforeEach(() => {
    // Initialize the search functionality
    cy.initializeSearch();
  });
  // Test to ensure the search dropdown appears when the seearch menu item is clicked
  it('should display search drop down when clicking on the "Search" menu item', () => {
    cy.get(SEARCH_SELECTORS.SEARCH_COMBOBOX).should("be.visible");
  });
  // Test to ensure the search input placeholder matches the expected value from fixture
  it("should validate search inputPlaceholder matches the fixture", () => {
    cy.get(SEARCH_SELECTORS.SEARCH_INPUT).should(
      "have.attr",
      "placeholder",
      searchData.searchData.inputPlaceholder
    );
  });
  // Various tests validating the display of popular suggestions and products
  it("should validate popularSuggestionsTitle is displayed with entries underneath", () => {
    cy.get(SEARCH_SELECTORS.SUGGESTIONS_TITLE_POPULAR).should(
      "contain",
      searchData.searchData.popularSuggestionsTitle
    );
  });

  it("should validate popularProductsTitle is displayed next to popularSuggestionsTitle", () => {
    cy.get(SEARCH_SELECTORS.PRODUCTS_TITLE_POPULAR).should(
      "contain",
      searchData.searchData.popularProductsTitle
    );
  });
  // Tet to ensure suggestions and product titles update when typing in search
  it("should validate search suggestions and products update as you type", () => {
    cy.get(SEARCH_SELECTORS.SEARCH_INPUT).type("jogger");
    cy.get(SEARCH_SELECTORS.SUGGESTIONS_TITLE_TYPED).should(
      "contain",
      searchData.searchData.suggestionsTitle
    );
    cy.get(SEARCH_SELECTORS.PRODUCTS_TITLE_TYPED).should(
      "contain",
      searchData.searchData.productsTitle
    );
  });
  // Test to ensure correct navigation when clicking "View all items" link after searching
  it('should navigate to correct page when clicking "View all items"', () => {
    cy.get(SEARCH_SELECTORS.SEARCH_INPUT).type("jogger");
    cy.get(SEARCH_SELECTORS.VIEW_ALL_LINK).click();
    cy.url().should("eq", `${baseURL}/search?q=jogger`);
  });
  // Test to ensure correct navigation when typing a search query and pressing enter
  it("should navigate to correct page when typing in search and pressing enter", () => {
    cy.get(SEARCH_SELECTORS.SEARCH_INPUT).type("jogger{enter}");
    cy.url().should("eq", `${baseURL}/search?q=jogger`);
  });
});
