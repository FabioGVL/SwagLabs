const faker = require('faker-br');
import elem from '../../../../support/elements';


describe ('Testes na tela de Checkout', () => {

    beforeEach(()=>{
        cy.visit('/')
        cy.login()

    })


    it('Cenário 1: Validação do campo First Name', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.shopping_cart_link').should('exist')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text','Error: First Name is required')

    })


    it('Cenário 2: Validação do campo Last Name', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.shopping_cart_link').should('exist')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Fábio')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text','Error: Last Name is required')

    })
    

    it('Cenário 3: Validação do campo Last Name', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.shopping_cart_link').should('exist')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Fábio')
        cy.get('[data-test="lastName"]').type('Gabriel')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('have.text','Error: Postal Code is required')

    })


    it('Cenário 4: Validação dados corretos e skip para próxima página', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.shopping_cart_link').should('exist')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Fábio')
        cy.get('[data-test="lastName"]').type('Gabriel')
        cy.get('[data-test="postalCode"]').type('90245520')
        cy.get('[data-test="continue"]').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.inventory_item_price').should('have.text', '$29.99')
        cy.get('.summary_info > :nth-child(2)').should('have.text', 'SauceCard #31337')
        cy.get('.summary_info > :nth-child(4)').should('have.text', 'Free Pony Express Delivery!')
        cy.get('.summary_subtotal_label').should('have.text', 'Item total: $29.99')
        cy.get('.summary_tax_label').should('have.text', 'Tax: $2.40')
        cy.get('.summary_total_label').should('have.text', 'Total: $32.39')

        
    })


    it('Cenário 5: Validar finalização da compra', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.shopping_cart_link').should('exist')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Fábio')
        cy.get('[data-test="lastName"]').type('Gabriel')
        cy.get('[data-test="postalCode"]').type('90245520')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')


    })

    it('Cenário 6: Validação de compra utilizando usuários diferentes', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type(faker.name.firstName())
        cy.get('[data-test="lastName"]').type(faker.name.lastName())
        cy.get('[data-test="postalCode"]').type(faker.address.zipCode())
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')

    })

})