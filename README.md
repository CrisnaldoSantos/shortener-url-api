<h1 align="center">
    <img src="./repo/assets/short-url.svg" width="50px">
    <br/>Shortener Url Api
</h1>

<p align="center">
  <a href="https://www.crisnaldocarvalho.com.br">
    <img alt="Made by Crisnaldo" src="https://img.shields.io/badge/made%20by-Crisnaldo Carvalho-28A745">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-28A745">
</p>

## Descrição:

<p>
Back-end contruído em NodeJs com NestJS que encurta URLs. É possível utilizar anonimamente ou criando uma conta na aplicação. Anonimamente é possível gerar URLs encurtadas e ter acesso a página de análise que retorna as 100 urls mais acessadas. Com a autenticação é possível visualizar uma nova aba denominada "Minhas Urls" pela qual é possivel ter acesso as urls geradas quando logado e excluí-las da aplicação.
</p>

A aplicação conta com uma pipeline que a publica automaticamente no Heroku, e pode ser acessada em homologação através da url:
<a href="https://suacr.herokuapp.com/" target="_blank">https://suacr.herokuapp.com/</a>

Essa aplicação foi documentada com Swagger e pode ser acessada através do endpoint '/api-docs'. <a href="https://suacr.herokuapp.com/api-docs" target="_blank">https://suacr.herokuapp.com/api-docs</a>

Como o Heroku em seu serviço gratuito hiberna os servidores após um período de inatividade, o primeiro acesso tende a ter uma resposta mais demorada.

## Instalação:

Após clonar o repositório, instale as dependências do projeto com os comandos abaixo via terminal:

```js
cd shortener-url-api
npm install
```

Abra o projeto no seu editor de código na sua preferência, renomeie o arquivo ".env.example" para ".env" e insira as informações referente a conexão com banco mongodb, e demias configurações da aplicação.

Com o terminal ainda na pasta raiz do projeto, execute o comando:

```js
npm run start:dev
```
