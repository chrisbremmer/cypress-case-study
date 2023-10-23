// Group of tests targeting the website's homepage functionality
describe("Homepage Tests", () => {
    // Variable to hold the intercepted data
    let homepageData;
  
    // Setup steps to be executed before each individual test
    beforeEach(() => {
      // Fetch the base URL and visit the homepage
      cy.getBaseURL().then((url) => {
        cy.visit(url);
  
        cy.intercept({
          method: "GET",
          url: "https://cdn.contentstack.io/v3/content_types/home_page/entries/*",
        }).as("homepageData");
  
      //   cy.closeSignUpForm();
        // cy.closeLocaleDialog();
  
        // Wait for the intercept to complete and store the data
        cy.wait("@homepageData").then((interception) => {
          homepageData = interception.response.body.entries[0].modular_blocks;
        });
      });
    });
  
    // Test to ensure the title of the hero_v2 section is correct and visible
    it("should validate the title of the hero_v2 section", () => {
      const heroData = homepageData.find((block) => block.hero_v2);
      cy.get("h2").contains(heroData.hero_v2.title).should("exist");
    });
  
    // Test to dynamically generate assertions for each button in the hero_v2 section based on the intercepted data
    it("should validate the hero_v2 buttons", () => {
      // Ensure homepageData is loaded
      expect(homepageData).to.exist;
  
      // Iterate through each button in the hero_v2 section of the homepageData and validate its presence and functionality
      homepageData
        .find((block) => block.hero_v2)
        .hero_v2.buttons.link.forEach((button, index) => {
          cy.get(
            `.MuiGrid-container > :nth-child(${index + 1}) > .MuiButtonBase-root`
          )
            .should("exist")
            .click({ force: true });
          cy.url().should("include", button.href);
        });
    });
  
    // Test to validate the title of the featured_collections_carousel section
    it("should validate the title of the featured_collections_carousel section", () => {
      const featuredCollectionData = homepageData.find(
        (block) => block.featured_collections_carousel
      );
      // Ensure the title is scrolled into view, visible, and contains the correct text
      cy.get("h2")
        .contains(featuredCollectionData.featured_collections_carousel.title)
        .scrollIntoView()
        .should(
          "contain.text",
          featuredCollectionData.featured_collections_carousel.title
        );
    });
  });
  