import elem from '../../../../support/elements'

describe ('Teste tela inicial', () => {


    beforeEach( () => {
        cy.visit('/')
        cy.login()

    });


    it('Cenário 1: Tela inicial, validação dos botões de adicionar e remover do carrinho', () => {
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#remove-sauce-labs-backpack').should('contain','Remove')
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('contain', 'Add to cart')

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[id="remove-sauce-labs-bike-light"]').should('contain','Remove')
        cy.get('[id="remove-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('contain', 'Add to cart')

    });


    it('Cenário 2: Validação da adição e remoção de itens ao carrinho em tela inicial', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('contain', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')

    });


    it('Cenário 2.1: Validação da adição e remoção de itens ao carrinho em tela inicial', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_badge').should('contain', '2')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')

    });


    it('Cenário 2.2: Validação da adição e remoção de itens ao carrinho em tela inicial', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_badge').should('contain', '3')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')

    });


    it('Cenário 3: Validação da funcionalidade select filter - Exibição de itens de A a Z', () => {

        cy.get('[data-test="product_sort_container"]').select('Name (A to Z)')

        cy.get('#inventory_container .inventory_item_name') 
        .then($elementos => {  
          const nomes = [...$elementos].map(elemento => elemento.innerText); 

          const nomesOrdenados = [...nomes].sort((a, b) => a.localeCompare(b));
          expect(nomes).to.deep.equal(nomesOrdenados);

        });

    });


    it('Cenário 4: Validação da funcionalidade select filter - Exibição de itens de Z a A', () => {

        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')

        cy.get('#inventory_container .inventory_item_name') 
        .then($elementos => {  
          const nomes = [...$elementos].map(elemento => elemento.innerText); 

          const nomesOrdenados = [...nomes].sort((a, b) => b.localeCompare(a));
          expect(nomes).to.deep.equal(nomesOrdenados);

        });

    });


    it('Cenário 5: Validação da funcionalidade select filter - Exibição de itens de Maior valor a Menor valor', () => {

        cy.get('[data-test="product_sort_container"]').select('Price (high to low)')

        cy.get('#inventory_container .inventory_item_name') 
        .then($elementos => {  
          const valores = [...$elementos].map(elemento => parseFloat(elemento.innerText.replace('$',''))); 

          const valoresOrdenados = [...valores].sort((a, b) => b - a);
          expect(valores).to.deep.equal(valoresOrdenados);

        });

    });


    it('Cenário 6: Validação da funcionalidade select filter - Exibição de itens de Menor valor a Maior valor', () => {

        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

        cy.get('#inventory_container .inventory_item_name') 
        .then($elementos => {  
          const valores = [...$elementos].map(elemento => parseFloat(elemento.innerText.replace('$',''))); 

          const valoresOrdenados = [...valores].sort((a, b) => a - b);
          expect(valores).to.deep.equal(valoresOrdenados);

        });


    });

    
});