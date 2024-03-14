# Metadados-frontend-pleno

Technical test for front-end developer position in Metadados.

## Index

- <a href="#-about">About the project</a>
- <a href="#-install">Installing and running the project</a>
- <a href="#-requirements">Requirements to run the project</a>
- <a href="#-tech">Technologies</a>
- <a href="#-commands">General commands and Tests</a>

## <h2 id="#-about">About the project<h2>

Esse projeto tem como objetivo replicar um prototipo do figma, fornecido pela empresa metadados
e consumir a seguinte api pública: Platzi Fake Store API.

O app tem as seguintes funcionalidades/features:

- [x] Listagem de produtos
- [x] Filtro por nome
- [x] Filtro por categoria
- [x] Filtro por preço
- [x] Filtro por range de preço
- [x] Carrinho de compras
- [x] Carrosel de imagens
- [x] Responsividade

## <h2 id="#-install">Installing and running the project<h2>

```bash
# Install de dependencies:
$ npm i

# Use docker-compose build to build the images:
$ docker-compose build

# Start the project with docker compose:
$ docker-compose up

# Acess the project through your browser:
$ http://localhost:5173/

```

## <h2 id="-requirements">Requisitos do serviço</h2>

This application uses Docker and Docker-compose to run, be sure to have those installed in your machine.

## <h2 id="-tech">Technologies utilized</h2>

- [x] React
- [x] Typescript
- [x] Jest
- [x] Docker
- [x] Styled-components
- [x] Other React/js libraries

## <h2 id="#-commands">General commands and Tests<h2>

```bash
# Build or rebuild the images:
$ docker-compose build

# Start the app and the db:
$ docker-compose up

# Shutdown the containers:
$ docker-compose down

# Run tests:
$ npm test
```
