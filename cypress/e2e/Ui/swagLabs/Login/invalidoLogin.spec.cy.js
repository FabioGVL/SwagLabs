import elem from '../../../../support/elements';

describe('Teste login', () => {

    beforeEach( () => {
        cy.visit('/')
        
    })

    
    it('Cenário Inválido 1: Login com dados inválidos - Usuário correto & senha inválida', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario'))
        cy.get(elem.campoSenha).type(Cypress.env('senha_invalida'))
        cy.get(elem.titulo_products).should('not.exist')
               
    })


    it('Cenário Inválido 2: Login com dados inválidos - Usuário inválido & senha correta', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario_invalido'))
        cy.get(elem.campoSenha).type(Cypress.env('senha'))
        cy.get(elem.titulo_products).should('not.exist')

    })


    it('Cenário Inválido 3: Login com dados inválidos - Login com campo usuário vazio', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario_vazio'))
        cy.get(elem.campoSenha).type(Cypress.env('senha'))
        cy.get(elem.titulo_products).should('not.exist')
               
    })


    it('Cenário Inválido 4: Login com dados inválidos - Login com campo senha vazio', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario'))
        cy.get(elem.campoSenha).type(Cypress.env('senha_vazio'))
        cy.get(elem.titulo_products).should('not.exist')
               
    })


    it('Cenário Inválido 5: Login com dados inválidos - Caracteres a mais no usuário', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario_invalido2'))
        cy.get(elem.campoSenha).type(Cypress.env('senha'))
        cy.get(elem.titulo_products).should('not.exist')

    })


    it('Cenário Inválido 6: Login com dados inválidos - Caracteres a mais na senha', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario'))
        cy.get(elem.campoSenha).type(Cypress.env('senha_invalida2'))
        cy.get(elem.titulo_products).should('not.exist')

    })


    it('Cenário Inválido 7: Login com dados inválidos - Caracteres a menos no usuário', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario_invalido'))
        cy.get(elem.campoSenha).type(Cypress.env('senha'))
        cy.get(elem.titulo_products).should('not.exist')

    })


    it('Cenário Inválido 8: Login com dados inválidos - Caracteres a menos na senha', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario'))
        cy.get(elem.campoSenha).type(Cypress.env('senha_invalida3'))
        cy.get(elem.titulo_products).should('not.exist')

    })


    it('Cenário Inválido 9: Login com dados inválidos - Usuário em maiúsculo', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario_maiusculo'))
        cy.get(elem.campoSenha).type(Cypress.env('senha'))
        cy.get(elem.titulo_products).should('not.exist')

    })


    it('Cenário Inválido 10: Login com dados inválidos - Senha em maiúsculo', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario'))
        cy.get(elem.campoSenha).type(Cypress.env('senha_maiusculo'))
        cy.get(elem.titulo_products).should('not.exist')

    })


    it('Cenário Inválido 11: Login com dados inválidos - Usuário e senha em maiúsculo', () => {

        cy.get(elem.campoUsuario).type(Cypress.env('usuario_maiusculo'))
        cy.get(elem.campoSenha).type(Cypress.env('senha_maiusculo'))
        cy.get(elem.titulo_products).should('not.exist')

    })
    

})

//Script de teste
//Locators(elementos)
//Comandos