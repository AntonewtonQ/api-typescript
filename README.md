
# 🛠️ API Clean Architecture — Node.js + TypeScript + PostgreSQL

Este projeto é um **template básico de API REST** utilizando **Node.js com TypeScript**, seguindo princípios da **Clean Architecture**, com suporte a **PostgreSQL via TypeORM**.

## 📦 Tecnologias Utilizadas

* Node.js
* TypeScript
* Express
* TypeORM
* PostgreSQL
* Class-validator / Class-transformer

## 📁 Estrutura de Pastas

```
src/
├── api/               # Controllers e rotas
├── application/       # Casos de uso (services)
├── config/            # Configurações do projeto (DB, env, etc)
├── domain/            # Entidades, DTOs, Interfaces (core do domínio)
├── infrastructure/    # DAL, Repositórios concretos, ORM
├── shared/            # Helpers, utils, middlewares
```

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd minha-api-clean
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure o banco de dados PostgreSQL**

   * Crie o banco e usuário:

     ```sql
     CREATE USER minhaapiuser WITH PASSWORD 'minhasenha';
     CREATE DATABASE minhaapi;
     GRANT ALL PRIVILEGES ON DATABASE minhaapi TO minhaapiuser;
     ```
   * Verifique as credenciais no arquivo:
     `src/infrastructure/dal/data-source.ts`

4. **Rode o projeto**

   ```bash
   npx ts-node-dev --respawn --transpile-only src/api/server.ts
   ```

5. **Testar a API**

   * Endpoint de exemplo:

     ```bash
     curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "john@example.com"}'
     ```

## ✅ Funcionalidades básicas

* Estrutura modular com Clean Architecture.
* Repositórios, DTOs, Interfaces e Services desacoplados.
* PostgreSQL integrado via TypeORM.
* Código 100% TypeScript.

## 📄 Licença

MIT

