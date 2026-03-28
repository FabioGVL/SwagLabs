const elements = {

    //Site em teste
    site: 'http://www.saucedemo.com',
   
    
    //ID's correspondentes aos campos de login, usuário, senha e botão logar
    
        campoUsuario: '[data-test="username"]',
        campoSenha: '[data-test="password"]',
        botaoLogin: '[data-test="login-button"]',

        
    //Itens e ID's para validação do teste
        titulo_products: '.title',
        mochila: '#item_4_img_link > .inventory_item_img',
        bike: '#item_0_img_link > .inventory_item_img',
        jacket: '#item_5_img_link > .inventory_item_img',
        tshirt: '#item_1_img_link > .inventory_item_img',
        addMochila: '[data-test="add-to-cart-sauce-labs-backpack"]',
        removerMochila:'[data-test="remove-sauce-labs-backpack"]',
        addBike: '[data-test="add-to-cart-sauce-labs-bike-light"]',
        removerBike:'[data-test="remove-sauce-labs-bike-light"]',
        carrinho:'.shopping_cart_link'

}
export default elements;