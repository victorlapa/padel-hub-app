# Padel Hub

Uma aplicação moderna de matchmaking para padel construída com Next.js 15, desenvolvida para conectar jogadores de padel e facilitar o agendamento de jogos. Os utilizadores podem definir a sua disponibilidade, clubes preferidos e nível de habilidade para encontrar jogos compatíveis.

## Funcionalidades

- **Autenticação de Utilizadores**: Integração Google OAuth com NextAuth.js
- **Gestão de Utilizadores**: Base de dados PostgreSQL com TypeORM para persistência de dados
- **Interface Moderna**: Construída com componentes shadcn/ui e Tailwind CSS
- **Design Responsivo**: Design mobile-first com navegação inferior
- **Interface em Português**: Localizada para utilizadores portugueses

## Stack Tecnológica

- **Framework**: Next.js 15 com App Router
- **Biblioteca UI**: shadcn/ui (estilo New York)
- **Estilização**: Tailwind CSS v4
- **Base de Dados**: PostgreSQL com TypeORM
- **Autenticação**: NextAuth.js com Google Provider
- **Ícones**: Lucide React
- **Animações**: Framer Motion
- **TypeScript**: Segurança de tipos completa ativada

## Começar

### Pré-requisitos

- Node.js 18+
- Base de dados PostgreSQL
- Credenciais Google OAuth

### Variáveis de Ambiente

Criar um ficheiro `.env.local` com:

```bash
# Base de Dados
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua_password
DB_NAME=padel_hub

# Google OAuth
GOOGLE_CLIENT_ID=seu_google_client_id
GOOGLE_CLIENT_SECRET=seu_google_client_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=seu_nextauth_secret
```

### Instalação

1. Clonar o repositório
2. Instalar dependências:

```bash
npm install
```

3. Executar o servidor de desenvolvimento:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Comandos de Desenvolvimento

- `npm run dev` - Iniciar servidor de desenvolvimento com Turbopack
- `npm run build` - Construir versão de produção
- `npm start` - Iniciar servidor de produção
- `npm run lint` - Executar ESLint

## Estrutura do Projeto

```
src/
├── app/                 # Páginas Next.js App Router
├── components/          # Componentes React reutilizáveis
│   └── ui/             # Componentes shadcn/ui
├── entities/           # Entidades TypeORM
├── lib/                # Funções utilitárias e configurações
└── styles/             # Estilos globais
```
