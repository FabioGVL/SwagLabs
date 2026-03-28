import elem from '../../../../support/elements';

describe('Teste login', () => {

    beforeEach( () => {
        cy.visit('/')
        cy.login()
        
    })

    
    it('Cenário Válido 1: Login com dados válidos', () => {

        cy.get(elem.titulo_products).should('exist')

    })


    it('Cenário Válido 2: Validação da imagem do item Mochila', () => {

      cy.get(elem.mochila).should('exist')
               
    })


    it('Cenário Válido 3: Validação da imagem do item Bike', () => {

        cy.get(elem.bike).should('exist')
               
    })


    it('Cenário Válido 4: Validação da imagem do item Jacket', () => {

        cy.get(elem.jacket).should('exist')
               
    })


    it('Cenário Válido 5: Validação da imagem do item T-Shirt', () => {

        cy.get(elem.tshirt).should('exist')
               
    })

})

//Script de teste
//Locators(elementos)
//Comandos