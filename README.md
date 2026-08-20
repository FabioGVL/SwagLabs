[![Cypress Tests](https://github.com/FabioGVL/SwagLabs-Cypress/actions/workflows/SwagLabsAutomation.yml/badge.svg)](https://github.com/FabioGVL/SwagLabs-Cypress/actions/workflows/SwagLabsAutomation.yml)

# Automação de Testes E2E - Swag Labs (SauceDemo)

## Escopo do Produto

A plataforma **Swag Labs (SauceDemo)** é um sistema de e-commerce simulado. O projeto foca em garantir a estabilidade do fluxo de vendas, cobrindo desde a autenticação com múltiplos perfis de usuários até a gestão de inventário, ordenação de produtos e a integridade de cálculos financeiros no checkout.

## Escopo do Teste

A estratégia foca em assegurar a robustez e a precisão do sistema, simulando jornadas reais de compra e aplicando rigor técnico nas validações de interface e lógica de negócios.

- **Mapeamento de Features:** Autenticação multi-perfil, Gestão de Inventário/Carrinho e Fluxo de Checkout.
- **Features Testadas:** Fluxos críticos de compra E2E (da adição de itens à confirmação do pedido), verificação de persistência de itens no carrinho, atualização em tempo real do badge de itens (`shopping_cart_badge`) e validação de obrigatoriedade de campos no formulário de checkout (*First Name*, *Last Name*, *Postal Code*).
- **Massa de Dados:** Uso de dados estáticos/fixos (credenciais fornecidas pela plataforma para diferentes estados de usuário) e dados gerados dinamicamente via biblioteca auxiliar (`Faker-br`) para geração de nomes e CEPs aleatórios no checkout.
- **Tipos de Testes:**
  - **Testes E2E (End-to-End):** Validação funcional dos fluxos de ponta a ponta que percorrem a aplicação, cobrindo jornadas completas de compra, alternância de estados de componentes (botões *Add to Cart* / *Remove*) e finalização de pedidos.
  - **Testes de Integração:** Validação da comunicação e sincronia entre a interface (UI) e as regras lógicas de negócio, incluindo algoritmos de ordenação de produtos (`sort()` e `localeCompare()` para critérios A-Z, Z-A e Preço), verificação de regras financeiras críticas (somatório de *Subtotal*, *Tax* e *Total*) e tratamento de parâmetros de ambiente (`Cypress.env`).

## Arquitetura e Estrutura

O projeto foi desenhado sob boas práticas de engenharia de QA para garantir alta manutenibilidade e resiliência:

- **Padrão de Projeto:** Utilização de comandos customizados (como `cy.login()`) para otimização do setup e redução drástica de duplicidade de código.
- **Mapeamento de Elementos:** Priorização de seletores baseados em atributos `data-test` (organizados em `elements.js`) para mitigar quebras decorrentes de alterações cosméticas de CSS ou IDs dinâmicos.
- **Tecnologias e Ambiente:** `Cypress` | `JavaScript (ES6+)` | `Node.js` | `Git` | `Windows 11` | `Chrome` | `Faker-br`

---

# Passos para Configurar e Reproduzir o Projeto

Siga o guia abaixo para clonar, configurar o ambiente e executar a suíte de testes automatizados em sua máquina local.

---

## Pré-requisitos

Certifique-se de possuir as seguintes ferramentas instaladas em seu ambiente:

- [Node.js](https://nodejs.org/) — versão 20.15.0 ou superior recomendada
- [Git](https://git-scm.com/)
- Editor de código de sua preferência, como [VS Code](https://code.visualstudio.com/)

---

## Obtendo o Código do Projeto

Você pode obter os arquivos do projeto de duas formas.

### Opção A: Clonando via Git (Recomendado)

Abra o terminal e execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/FabioGVL/SwagLabs-Cypress.git
```

Em seguida, navegue para dentro da pasta do projeto:

```bash
cd SwagLabs-Cypress
```

### Opção B: Baixando via ZIP

1. Acesse a página do repositório no GitHub.
2. Clique no botão verde **Code**.
3. Selecione **Download ZIP**.
4. Extraia o conteúdo do arquivo compactado em uma pasta no seu computador.
5. Abra o VS Code.
6. Acesse **Arquivo > Abrir Pasta** e selecione a pasta descompactada.

---

## Instalando as Dependências

Com o terminal aberto na raiz do projeto, execute o comando abaixo para instalar todas as dependências listadas no `package.json`:

```bash
npm install
```

---

## Executando os Testes

O projeto suporta diferentes modos de execução, de acordo com a necessidade.

### Modo Interativo com Interface (UI Mode)

Abre o painel visual do Cypress, permitindo selecionar o navegador, acompanhar a execução passo a passo, inspecionar elementos e realizar o debug de testes individualmente:

```bash
npx cypress open
```

### Execução Padrão (Headless)

Executa toda a suíte de testes em segundo plano, diretamente pelo terminal:

```bash
npx cypress run
```

### Execução em Navegador Específico (Headed)

Executa os testes de forma visível, abrindo o navegador configurado:

```bash
npx cypress run --headed
```

## Resumo dos Comandos

| Objetivo | Comando |
|---|---|
| Instalar dependências | `npm install` |
| Abrir interface gráfica (UI Mode) | `npx cypress open` |
| Executar testes em modo Headless | `npx cypress run` |
| Executar testes em modo Headed | `npx cypress run --headed` |
| Executar testes em navegador específico | `npx cypress run --browser chrome` |
