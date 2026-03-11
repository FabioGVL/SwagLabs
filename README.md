# Escopo do Projeto
Este documento detalha a estratégia de automação de testes End-to-End (E2E) para a plataforma **Swag Labs (SauceDemo)**. O objetivo principal é garantir a estabilidade do sistema de vendas, cobrindo desde a autenticação de diferentes perfis de usuários até a validação rigorosa de lógica de ordenação de produtos, gestão de carrinho e integridade de cálculos financeiros no checkout.

## 2. TECNOLOGIAS UTILIZADAS
* **Framework:** [Cypress](https://www.cypress.io/) (v13+)
* **Linguagem:** JavaScript / Node.js
* **Massa de Dados:** [Faker-br](https://www.npmjs.com/package/faker-br)
* **Arquitetura:** Page Objects (Elements Mapping) & Custom Commands
* **CI/CD:** GitHub Actions (Execução automatizada em cada Push/PR)

## 3. ARQUITETURA E ESTRUTURA
O projeto utiliza padrões avançados de engenharia de QA para garantir que a interface e a lógica de negócio estejam síncronas:

* **Algorithmic Sorting Validation:** Implementação de lógica em JavaScript para validar filtros de ordenação (A-Z, Z-A, Preço). O teste captura arrays de elementos da UI e os compara com cópias ordenadas programaticamente via `sort()` e `localeCompare()`, garantindo que o front-end está classificando os itens corretamente.
* **Resilient Selectors (Best Practices):** Priorização de seletores `data-test` no mapeamento de elementos (`elements.js`), seguindo as recomendações oficiais para evitar que os testes quebrem com mudanças cosméticas de CSS ou IDs dinâmicos.
* **Calculated Checkout:** Verificação de regras financeiras críticas, validando se o somatório de *Subtotal*, *Tax* (Imposto) e *Total* está sendo processado e exibido corretamente antes da finalização do pedido.
* **Dynamic UI State:** Validação de alternância de estados de componentes (ex: botões que alternam entre "Add to Cart" e "Remove") e atualização em tempo real do badge do carrinho (`shopping_cart_badge`).
* **Extensive Login Testing:** Cobertura de cenários negativos exaustivos (11+ cenários), incluindo sensibilidade a maiúsculas, limites de caracteres, campos obrigatórios e tratamento de variáveis de ambiente via `Cypress.env`.
* **Custom Commands:** Implementação de `cy.login()` e outros comandos personalizados para otimização do setup de testes e redução drástica de duplicidade de código.

## 4. COMO EXECUTAR O PROJETO

### **Pré-requisitos**
* Node.js instalado (v18+)
* Clone do repositório: `git clone https://github.com/FabioGVL/SwagLabs.git`

### **Instalação**
```bash
npm install
npx cypress run
