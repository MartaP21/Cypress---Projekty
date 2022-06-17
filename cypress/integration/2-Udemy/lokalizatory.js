/// <reference types="cypress"/>

describe("E2E - Lesson", ()=> {
    it("Lokalizatorach", ()=>{
        cy.visit("/") //odpali base url

        // pobieranie po znaczniku a, input, div itp.
        cy.get("a");
        //pobieranie po identyfikatorze
        cy.get("#search_query_top")
        //po klasie
        cy.get(".form-control")
        //po atrybutach
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')
        //dokładniejszy atrybut wraz z podaniem znacznika
        cy.get('input[placeholder="Search"]')
        //po kilku atrybutach
        cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //zalecana praktyka pobierania elementów
        //cy.get('[data-cy="wyszukiwarka"]')
    
    })
})