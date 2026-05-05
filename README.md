# éPrajá - Marketplace de Serviços Locais

App marketplace conectando clientes com profissionais de serviços em Curitiba e região.

## Stack

- **Frontend**: React 18 + Vite
- **Roteamento**: React Router v6
- **Backend**: Supabase (PostgreSQL + Auth)
- **Armazenamento**: Firebase Storage
- **Pagamentos**: Stripe
- **Deploy**: Vercel

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/marcelomoreiralog/epraj--app-final.git
cd epraj--app-final
```

2. Instale as dependências:
```bash
npm install
```

3. Rode localmente:
```bash
npm run dev
```

Acessa em: http://localhost:5173

## Deploy no Vercel

1. Push para o GitHub
2. Vá em vercel.com
3. Clica "Add New" → "Project"
4. Importa o repositório
5. Deploy automático!

## Estrutura

```
src/
├── App.jsx           # App principal com rotas
├── main.jsx          # Entry point
├── pages/
│   ├── HomePage.jsx  # Home com categorias
│   ├── LoginPage.jsx # Login
│   ├── SignupPage.jsx # Cadastro
│   └── SearchPage.jsx # Busca de profissionais
└── styles/
    └── index.css     # CSS global
```

## Funcionalidades MVP

- ✅ Home com 8 categorias
- ✅ Sistema de login/cadastro
- ✅ Busca de profissionais
- ✅ Perfil do profissional
- 🔄 Chat simples
- 🔄 Solicitar orçamento
- 🔄 Pagamento de promoções

## Variáveis de Ambiente

Cria um `.env.local`:

```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-key-aqui
VITE_STRIPE_PUBLISHABLE=pk_test_...
```

## Cores

- **Brand**: #ef8a23 (laranja)
- **Sucesso**: #10b981 (verde)
- **Erro**: #ef4444 (vermelho)

## Próximos Passos

1. Conectar Supabase real
2. Implementar autenticação
3. Chat em tempo real
4. Upload de fotos
5. Sistema de avaliações
6. Pagamentos com Stripe
