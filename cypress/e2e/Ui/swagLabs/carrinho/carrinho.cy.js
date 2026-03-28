import elem from '../../../../support/elements'


describe('Testes referentes ao carrinho de compras', () => {

    beforeEach( () => {
        cy.visit('/')
        cy.login()

    });


    it('Cenário 1: Validação de adição item no carrinho de compras', () => {

        cy.get(elem.addMochila).click()
        cy.get('.shopping_cart_badge').should('contain', '1')
        cy.get(elem.carrinho).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')

    });


    it('Cenário 1.1: Validação de remoção de item no carrinho de compras', () => {

        cy.get(elem.addMochila).click()
        cy.get(elem.carrinho).click()
        cy.get(elem.removerMochila).click()
        cy.contains('Sauce Labs Backpack').should('not.exist')

    });


    it('Cenário 2: Validação de adição de itens no carrinho de compras contendo mais itens', () => {

        cy.get(elem.addMochila).click()
        cy.get(elem.addBike).click()
        cy.get('.shopping_cart_badge').should('contain', '2')
        cy.get(elem.carrinho).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('Sauce Labs Bike Light').should('be.visible')

    });


    it('Cenário 2.1: Validação de remoção de itens no carrinho de compras', () => {

        cy.get(elem.addMochila).click()
        cy.get(elem.addBike).click()
        cy.get(elem.carrinho).click()
        cy.get(elem.removerMochila).click()
        cy.get(elem.removerBike).click()
        cy.contains('Sauce Labs Backpack').should('not.exist')
        cy.contains('Sauce Labs Bike Light').should('not.exist')

    });


});