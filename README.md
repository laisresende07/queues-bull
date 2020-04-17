## Background jobs (filas) no Node.js com Bull


Este projeto foi realizado utilizando uma biblioteca chamada Bull que nos permite não só executar background jobs mas também monitorar falhas, realizar retentativas, adicionar prioridades e tudo isso de uma forma extremamente simples e performática. *(painel para gerenciamento das filas: localhost:[port]]/admin/queues)*

##  Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd queues-bull`;
3. Rode `yarn` para instalar as dependências;
4. Crie um arquivo `.env` com as credenciais de email e do Redis;
7. Rode `yarn dev` para iniciar o servidor.

## Novo job
- Crie o job na pasta de jobs
- Exporte no index.js
- Adicione na fila no UserController.js