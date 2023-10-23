// Menu selectors for top nav section of the website
export const MENU_SELECTORS = {
    WOMEN: 'div[aria-label="Women"]',
    MEN: 'div[aria-label="Men"]',
    COMMUNITY: 'div[aria-label="Community"]',
    SEARCH: 'div[aria-label="Search"]',
    ACCOUNT: 'div[aria-label="Account"]',
    BAG: 'div[aria-label="Bag"]',
  };
  // Configuration for top nav navigation
  export const NAVIGATION_CONFIG = [
    {
      selector: MENU_SELECTORS.WOMEN,
      url: "/collections/womens",
      description: "Women's Collection",
    },
    {
      selector: MENU_SELECTORS.MEN,
      url: "/collections/mens",
      description: "Men's Collection",
    },
    {
      selector: MENU_SELECTORS.COMMUNITY,
      url: "/pages/our-story",
      description: "Our Story Page",
    },
    {
      selector: MENU_SELECTORS.ACCOUNT,
      url: "/account/login",
      description: "Account Login Page",
    },
  ];
  // Selectors specific to the search functionality on the website
  export const SEARCH_SELECTORS = {
    SEARCH_COMBOBOX: '[role="combobox"][aria-haspopup="listbox"]',
    SEARCH_INPUT: "#autocomplete-0-input",
    SUGGESTIONS_TITLE_POPULAR:
      ".mui-style-g0fq71 > :nth-child(1) > .MuiTypography-root",
    PRODUCTS_TITLE_POPULAR:
      ".mui-style-1eaknri > :nth-child(1) > .MuiTypography-h4",
    SUGGESTIONS_TITLE_TYPED:
      ".mui-style-g0fq71 > :nth-child(1) > .MuiTypography-root",
    PRODUCTS_TITLE_TYPED:
      ".mui-style-1eaknri > :nth-child(1) > .MuiTypography-h4",
    VIEW_ALL_LINK: ".mui-style-g0fq71 > :nth-child(1) > .MuiTypography-body1",
  };
  