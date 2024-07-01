/// <reference types="cypress"/>

describe('Funcionalidade: produtos', () => {

beforeEach(() => {
    cy.visit('produtos')
});
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(0)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()


            cy.get('#tab-title-description > a').should('contain' , 'Descrição')

    });


});