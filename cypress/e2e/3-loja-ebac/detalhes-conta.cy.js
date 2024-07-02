/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', ()=> {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login('jeane.teste@teste.com.br', 'Juan020817')
    });

it('Deve completar detalhes da conta com sucesso', () => {
   cy.detalhesConta('Jeane', 'Hora', 'jeaneqa' )

});
    
});