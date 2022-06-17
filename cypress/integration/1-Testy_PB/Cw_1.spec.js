/// <reference types="cypress"/>
import searchFraze from "../../fixtures/searchFraze.json";

context("Testy wejsc na strone", () => {
  describe("Landing tests", () => {
    it("Test1"); //błąd tekst do uzupełnienia
  });
  describe("Google Tests", () => {
    beforeEach("Enter google page and confirm policy", () => {
      cy.visit("www.google.com");
      cy.url().should("contain", "https://www.google.com/");
      cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
      cy.get(".dbsFrd").should("not.be.visible");
      cy.fixture("searchFraze.json").as("frazesByAlias");
    });
    it.skip("test 1", () => {
      cy.visit("www.google.com");
      cy.url().should("contain", "https://www.google.com/");
      cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
      cy.get(".dbsFrd").should("not.be.visible");
    });
    it("Search for wikipedia and click search from dropdown", () => {
      cy.get(".gLFyf").clear().type("wikipedia").wait(4000);
      cy.get(".CqAVzb > center > .gNO89b").click();
      cy.url().should("contain", "wikipedia");
    });
    it("Search for wikipedia and click search from mainpage", () => {
      cy.get(".gLFyf").clear().type("wikipedia");
      cy.get(".LLD4me").click();
      cy.get(".FPdoLc > center > .gNO89b").click();
      cy.get(
        '[href="https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna"] > .LC20lb'
      ).should("be.visible");
    });
    it("Search for wikipedia and click first dropdown result", () => {
      cy.get(".gLFyf").clear().type("wikipedia").wait(3000);
      cy.get(":nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span").click();
      cy.get(".LC20lb").eq(0).should("be.visible");
    });
    it("Search for wikipedia and click first dropdown result by eq", () => {
      cy.get(".gLFyf").clear().type("wikipedia").wait(4000);
      cy.get(".wM6W7d > span").eq(0).click();
    });
    it("Search fraze from fixture", function () {
      cy.log(searchFraze[0].fraze);
      cy.get(".gLFyf")
        .clear()
        .type(searchFraze[0].fraze)
        .should("have.value", searchFraze[0].fraze);
      cy.get(".gLFyf")
        .clear()
        .type(searchFraze[1].fraze)
        .should("have.value", searchFraze[1].fraze);
    });
    it("Search fraze from fixture by function", function () {
      //coś neidziała
      cy.log("test");
      cy.get(".gLFyf").as("input");
      cy.log(this.frazesByAlias[0].fraze);
      //cy.get('@input').clear().type(this.frazesByAlias[0].fraze).should('have.value', searchFraze[0].fraze);
      //cy.get('@input').clear().type(this.frazesByAlias[1].fraze).should('have.value', searchFraze[1].fraze);
      cy.get("@input")
        .clear()
        .type(this.frazesByAlias[0].fraze)
        .type("{enter}");
      cy.url().should("contain", searchFraze[0].fraze);
    });
    it("Search fraze by then", () => {
      cy.fixture("searchFraze").then((frazes) => {
        cy.get(".gLFyf").type(frazes[0].fraze);
      })//.clear();
      cy.fixture("searchFraze").as("fraz");
      cy.get(".gLFyf").clear();
      cy.get("@fraz").then((frazes) => {
        cy.get(".gLFyf").type(frazes[1].fraze);
      });
    });
  });

  // describe("Testy wp.pl", () => {
  //   it("test 2", () => {
  //     cy.visit("www.wp.pl");
  //     cy.url().should("contain", "https://www.wp.pl/");
  //     cy.get('body > div > div > div > div > div > button:nth-child(2)').click();
  //   });
  // }); ///Ctrl/ - komentuje zaznaczony kawałek tekstu
});
