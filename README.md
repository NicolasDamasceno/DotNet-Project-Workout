# FinShark - Sistema de Análise Financeira

O **FinShark** é uma aplicação Full Stack de análise financeira projetada para permitir que usuários busquem ações, visualizem balanços patrimoniais, demonstrações de fluxo de caixa e gerenciem portfólios de investimentos personalizados. 

Este projeto está sendo desenvolvido ativamente como parte de um plano de capacitação técnica e aprendizado prático voltado às demandas de engenharia de software da **Level33**. O curso utilizado é de Teddy Smith (https://youtu.be/XSLm9PHnkxI?si=We5vluagtWg0fC24)

---

## Tecnologias Utilizadas

### Backend (API)
* **Plataforma:** .NET Core (ASP.NET Core Web API)
* **Linguagem:** C#
* **Mapeamento Objeto-Relacional (ORM):** Entity Framework Core
* **Banco de Dados:** PostgreSQL
* **Segurança & Autenticação:** ASP.NET Core Identity + JWT (JSON Web Tokens) com Claims

### Frontend
* **Biblioteca:** React
* **Linguagem:** TypeScript
* **Estilização:** CSS3 Clássico / Modular

---

## Progresso do Desenvolvimento (Backend)

O ecossistema do backend já conta com toda a base de dados, segurança e arquitetura de rotas estruturadas:

* **Arquitetura de Dados & Models:** Modelagem robusta das entidades principais do sistema (como `Stock`, `Comment` e `AppUser`), utilizando o padrão **DTO (Data Transfer Objects)** para otimizar o tráfego de dados e isolar as entidades do banco.
* **Persistência de Dados:** Integração completa com o banco PostgreSQL através do EF Core, gerenciando migrações automatizadas.
* **Autenticação com ASP.NET Identity:** Configuração completa do sistema de gerenciamento de usuários, cuidando de validações de senha, hash de segurança e criação de contas.
* **Segurança via JWT & Claims:** Implementação de um `TokenService` responsável por gerar tokens assinados com criptografia simétrica `HMAC-SHA512`. Os dados cruciais do usuário (como e-mail e username) são encapsulados em **Claims** direto no token, eliminando consultas repetitivas ao banco.
* **Proteção de Rotas:** Autenticação global via Bearer Token configurada no `Program.cs`. Rotas críticas de gerenciamento de ações (`Stocks`) e criação de comentários (`Comments`) estão blindadas e exigem o token JWT válido para autorizar o acesso.

---

## 🎲 Como Executar o Projeto (Apenas Backend por enquanto)

### Pré-requisitos
* [.NET SDK](https://dotnet.microsoft.com/download) instalado.
* Instância do [PostgreSQL](https://www.postgresql.org/) ativa (ou rodando localmente).

### 1. Configuração do Ambiente
Na raiz da pasta `api/`, certifique-se de que o seu arquivo `appsettings.Development.json` possui as credenciais corretas para o banco de dados e a assinatura do token:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=finshark;Username=seu_usuario;Password=sua_senha"
  },
  "JWT": {
    "ValidIssuer": "http://localhost:5039",
    "ValidAudience": "http://localhost:5039",
    "SigningKey": "SuaChaveSuperSecretaComMaisDeDozeCaracteresAqui"
  }
}