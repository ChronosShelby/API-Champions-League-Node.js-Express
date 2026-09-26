# API Champions League — Node.js + Express

API desenvolvida com **Node.js, Express e TypeScript** com o objetivo de praticar conceitos de desenvolvimento de APIs REST, organização de projeto e operações CRUD.

O projeto utiliza arquivos **JSON como fonte de dados**, permitindo realizar consultas, criação, atualização e exclusão de jogadores.

---

## Tecnologias utilizadas

* **Node.js**
* **TypeScript**
* **Express**

---

## Estrutura do projeto

O projeto foi organizado seguindo uma separação de responsabilidades entre as principais camadas da aplicação:

```text
src/
├── controllers/
│   ├── clubs-controler.ts
│   └── players-controller.ts
│
├── data/
│   ├── clubs.json
│   └── players.json
│
├── models/
│   ├── club-mode.ts
│   ├── http-response-model.ts
│   ├── player-model.ts
│   └── statistics-model.ts
│
├── repositories/
│   ├── clubs-repository.ts
│   └── players-repository.ts
│
├── services/
│   ├── clubs-services.ts
│   └── players-services.ts
│
├── utils/
│   └── http-helper.ts
│
├── app.ts
├── routes.ts
└── server.ts
```

### Fluxo da aplicação

```text
Requisição HTTP
      ↓
   Routes
      ↓
 Controllers
      ↓
   Services
      ↓
 Repositories
      ↓
 Arquivos JSON
```

Essa organização permite separar as responsabilidades de cada parte da aplicação e facilita a compreensão do fluxo de uma requisição.

---

## Funcionalidades

### Jogadores

A API permite:

* Listar todos os jogadores
* Buscar um jogador pelo ID
* Cadastrar um jogador
* Atualizar as estatísticas de um jogador
* Excluir um jogador

### Clubes

* Listar todos os clubes cadastrados

---

## Endpoints

A API utiliza `/api` como prefixo das rotas.

### Players

| Método   | Endpoint           | Descrição                              |
| -------- | ------------------ | -------------------------------------- |
| `GET`    | `/api/players`     | Lista todos os jogadores               |
| `GET`    | `/api/players/:id` | Busca um jogador pelo ID               |
| `POST`   | `/api/players`     | Cadastra um novo jogador               |
| `PATCH`  | `/api/players/:id` | Atualiza as estatísticas de um jogador |
| `DELETE` | `/api/players/:id` | Exclui um jogador                      |

### Clubs

| Método | Endpoint     | Descrição             |
| ------ | ------------ | --------------------- |
| `GET`  | `/api/clubs` | Lista todos os clubes |

---

## Modelo de jogador

Cada jogador possui informações como:

```json
{
  "id": 1,
  "name": "Nome do jogador",
  "Club": "Nome do clube",
  "nationality": "Nacionalidade",
  "position": "Posição",
  "statistics": {
    "overall": 85,
    "pace": 80,
    "shooting": 82,
    "passing": 78,
    "dribbling": 84,
    "defending": 60,
    "physical": 75
  }
}
```

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/ChronosShelby/API-Champions-League-Node.js-Express.git
```

### 2. Acesse a pasta do projeto

```bash
cd API-Champions-League-Node.js-Express
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run start:dev
```

O servidor será iniciado utilizando a porta configurada no projeto.

---

## Objetivo do projeto

Este projeto foi desenvolvido com foco na compreensão dos conceitos fundamentais de construção de APIs utilizando Node.js.

Durante o desenvolvimento foram praticados conceitos como:

* Criação de APIs REST
* Rotas HTTP
* Controllers
* Services
* Repositories
* CRUD
* TypeScript
* Interfaces e tipagem
* Manipulação de arquivos JSON
* Requisições e respostas HTTP
* Organização e separação de responsabilidades
* Gerenciamento de dependências com npm
* Versionamento utilizando Git e GitHub

---

## Autor

**Igor Gabriel Antunes da Silva**

Desenvolvedor Full-Stack.

[GitHub](https://github.com/ChronosShelby)
