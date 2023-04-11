<p align="center">
    <img alt="rentx" src="./.github/Capa.png" />
</p>

<h1 align="center">
  RentX API
</h1>

<p align="center">Uma API RESTful para aluguel de carros</p>

<p align="center">
  <a href="#">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-2ecc71">
  </a>

  <a href="https://github.com/IgorThierry">
    <img alt="Made by Igor Thierry" src="https://img.shields.io/badge/Made%20by-Igor%20Thierry-2ecc71">
  </a>

  <a href="https://www.linkedin.com/in/igorthierry/">
    <img alt="Follow me Linkedin" src="https://img.shields.io/badge/Follow%20up-igorthierry-2ecc71?style=social&logo=linkedin">
  </a>
</p>


## 🔧 Tecnologias

- TypeScript
- Node
- Express
- Tsyringe
- JsonWebToken
- Bcrypt
- AWS SDK
- Multer
- Nodemailer
- Handlebars
- Supertest
- Swagger UI Express
- TypeORM
- Postgres
- Redis
- Docker
- Docker Compose
- Sentry
- ESLint + Prettier + EditorConfig;

## 💻 Executando a aplicação

Clone o repositório;

```bash
$ git clone https://github.com/IgorThierry/rentx-api.git
```

Acesse a pasta do projeto;

```bash
$ cd rentx-api
```

Instale as dependências;

```bash
$ npm install
```

Crie um arquivo .env na raiz do projeto e preencha com as variáveis de ambiente;

```bash
$ cp .env.example .env
```

Inicie o docker-compose;

```bash
$ docker-compose up -d
```

Execute as migrations;

```bash
$ npm run typeorm migration:run
```

Utilize o arquivo Insomnia.json para testar as rotas da aplicação (./course-files/API_COLLECTION_INSOMNIA.json);

## 🚀 **Em constante evolução...**

---

Feito com ♥ by [Igor Thierry](https://www.linkedin.com/in/igorthierry/)
