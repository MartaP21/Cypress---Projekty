/// <reference types="cypress"/>

Cypress.Commands.add('lazy',()=>{
    cy.log('Im lazy');
})
Cypress.Commands.add("closePopUp", ()=>{
    cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
    cy.get(".dbsFrd").should("not.be.visible");
})

Cypress.Commands.add("closePopUp2", ()=>{ //wszystko to można przenieść do commands.js w support lub/i index.js -> import './commands')
    cy.get('body').then(($body)=>{
        if($body.find('#L2AGLb > .QS5gu').length > 0){
            cy.get("#L2AGLb > .QS5gu").then(($button)=>{
                if($button.is(':visible')){
                    cy.wrap($button).click();
                }
            })
        }
    })
})

Cypress.Commands.add('checkElementsVisibility',
{ prevSubject: 'element'},
(subject)=>{
    return cy.wrap(subject).should('be.visible');
})

context("Custom commands", () => {
    describe('Teste with commands', ()=>{
        beforeEach(()=>{
            cy.viewport(1920, 1080);
            cy.visit("www.google.com");
            cy.closePopUp();
        })
        it('Test1',()=>{
            cy.lazy();
            //cy.get('.gLFyf').closePopUp();
            cy.get('.gLFyf').checkElementsVisibility().type('text');
        })
    })
});
