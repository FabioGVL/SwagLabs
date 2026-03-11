# Escopo do Projeto
Este documento detalha a estratégia de automação de testes End-to-End (E2E) para a plataforma **Swag Labs (SauceDemo)**. O objetivo principal é garantir a estabilidade do sistema de vendas, cobrindo desde a autenticação de diferentes perfis de usuários até a validação rigorosa de lógica de ordenação de produtos, gestão de carrinho e integridade de cálculos financeiros no checkout.

## Escopo do Teste

### 1. Mapeamento de Features:
* **Autenticação:** Validação de login com múltiplos perfis (standard, locked, problem).
* **Carrinho de Compras:** Gestão de inventário e persistência de itens selecionados.
* **Checkout:** Fluxo de finalização de compra, incluindo formulário de cliente e revisão de valores.

### 2. Features Testadas:
* **Fluxo E2E de Compra:** Adição de itens, validação do contador (`badge`), preenchimento de checkout e confirmação de pedido.
* **Gestão de Inventário:** Remoção de itens tanto na Home quanto na página do Carrinho.
* **Validação de Campos:** Obrigatoriedade de dados no formulário de checkout (First Name, Last Name, Postal Code).

### 3. Massa de Dados para Teste:
* **Dados Dinâmicos:** Uso da biblioteca `faker-br` para gerar nomes e CEPs aleatórios no checkout, evitando testes viciados.
* **Dados Fixos:** Credenciais de sistema fornecidas pela plataforma para testes de diferentes estados de usuário.

### 4. Tipos de Testes Utilizados:
* **Testes de Funcionalidade:** Garantir que o botão "Add to Cart" altera o estado para "Remove" e vice-versa.
* **Testes de Regressão:** Garantir que novas inclusões de itens não quebrem o cálculo total do checkout.
* **Testes de Usabilidade:** Verificação de mensagens de erro amigáveis para o usuário em caso de campos vazios.

## Arquitetura e estrutura
O projeto utiliza padrões de engenharia de QA para garantir que a interface e a lógica de negócio estejam síncronas:

* Implementação de lógica em JavaScript para validar filtros de ordenação (A-Z, Z-A, Preço) via `sort()` e `localeCompare()`, garantindo que o front-end está classificando os itens corretamente.
* Priorização de seletores `data-test` no mapeamento de elementos (`elements.js`), seguindo as recomendações oficiais para evitar que os testes quebrem com mudanças cosméticas de CSS ou IDs dinâmicos.
* Verificação de regras financeiras críticas, validando se o somatório de *Subtotal*, *Tax* (Imposto) e *Total* está sendo processado e exibido corretamente antes da finalização do pedido.
* Validação de alternância de estados de componentes (ex: botões que alternam entre "Add to Cart" e "Remove") e atualização em tempo real do badge do carrinho (`shopping_cart_badge`).
* Cobertura de cenários negativos, incluindo sensibilidade a maiúsculas, limites de caracteres, campos obrigatórios e tratamento de variáveis de ambiente via `Cypress.env`.
* Implementação de `cy.login()` e outros comandos personalizados para otimização do setup de testes e redução drástica de duplicidade de código.


## Tecnologias/ambientes utilizados para execução do projeto:
- Cypress v10.11.0
- Node JS v20.15.0
- Google Chrome v126.0.6478.126
- Windows 11 v23H2
- Biblioteca de massa de dados: [Faker-br](https://www.npmjs.com/package/faker-br)
- GIT


## Passos para reproduzir o teste

### 1. Efetuando o download e descompactando o projeto
- No GitHub, clique em "code".
- Clique em "Download Zip" para fazer o download do arquivo deste teste.
- No seu computador, localize o download efetuado.
- Descompacte o arquivo.

### 1.2 Configurando o projeto no VSCode e executando o teste
- Abra o VSCode.
- Clique em `Arquivo/File`.
- Clique em `Abrir pasta/Open folder`.
- Escolha a pasta do arquivo descompactado (`SwagLabs-master`).
- Após o projeto ser aberto no VSCode, navegue até `Cypress > E2E`.
- Os testes estarão dentro das pastas `UI`.
- No terminal do Cypress digite `npx cypress open`. Caso necessário, instale o Cypress através do comando `npm install cypress`.
- Aguarde o Cypress abrir.
- Selecione a opção `E2E Testing`.
- Na próxima página selecione o navegador desejado.
- Na próxima página selecione o teste que deseja executar e a automação será executada.
- Também é possível executar o teste através do comando `npx cypress run`. O teste rodará dentro do próprio VSCode e serão gerados vídeos dos resultados dos testes. Os vídeos ficarão armazenados no destino `Cypress > Vídeos`.


