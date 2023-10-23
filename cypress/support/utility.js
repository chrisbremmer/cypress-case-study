// Utility class contains methods and properties that assist with various functionalities in the tests
export class Utility {
    constructor() {
      // Mapping of different locales to their respective domain URLs
      this.localeToUrlMapping = {
        "en-au": "vuoriclothing.com.au", // ✅
        "en-ca": "vuoriclothing.ca", // ✅
        "fr-fr": "vuoriclothing.fr", // ❌
        "de-de": "vuoriclothing.de", // ✅
        "zh-hk": "vuoriclothing.hk", // ✅
        "en-ie": "ie.vuoriclothing.com", // ✅
        "es-mx": "vuoriclothing.mx", // ✅
        "nl-nl": "vuoriclothing.nl", // ✅
        "zh-sg": "vuoriclothing.sg", // ✅
        "ar-ae": "vuoriclothing.ae", // ✅
        "en-gb": "vuoriclothing.co.uk", // ✅
        "en-us": "vuoriclothing.com", // ✅
      };
    }
    // Determines the base URL to be used based on the LOCALE and ENV set in Cypress environment
    getBaseUrl() {
      const locale = Cypress.env("LOCALE");
      const env = Cypress.env("ENV");
  
      if (!locale) {
        throw new Error("Locale is not set in Cypress environment variables.");
      }
  
      if (!env) {
        throw new Error(
          "Environment is not set in Cypress environment variables."
        );
      }
  
      let subdomain = "";
      if (env && env !== "production") {
        subdomain = `${env}.`;
      }
  
      const domain = this.localeToUrlMapping[locale] || "vuoriclothing.com";
      return `https://${subdomain}${domain}`;
    }
  }
  