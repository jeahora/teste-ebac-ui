/// <reference types="cypress"/>

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
        
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('jeane.teste@teste.com.br')  
        cy.get('#password').type('Juan020817')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jeane.teste (não é jeane.teste? Sair)')

    })

    it('Deve exibir uma mesagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('jeane@teste.com.br')  
        cy.get('#password').type('Juan020817')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')

    });  

    it('Deve exibir uma mensagem de erro ao exibir senha inválida', () => {
        cy.get('#username').type('jeane.teste@teste.com.br')  
        cy.get('#password').type('Juan0000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail jeane.teste@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')

    });

})