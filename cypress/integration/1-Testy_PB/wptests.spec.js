/// <reference types="cypress"/>

describe("Testy wp.pl", () => {
    it("test 2", () => {
      cy.visit("www.wp.pl");
      cy.url().should("contain", "https://www.wp.pl/");
      cy.get('body > div > div > div > div > div > button:nth-child(2)').click();
    });
}); 
