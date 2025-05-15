# PLENITUDE PWA

Bem-vindo ao PLENITUDE PWA! Esta é uma aplicação web progressiva (PWA) desenvolvida para promover o bem-estar, criada com Next.js, TypeScript, Tailwind CSS e Firebase.

## Funcionalidades

*   **Autenticação de Usuários:** Login seguro utilizando contas Google através do Firebase Authentication.
*   **Tela de Login:** Interface para entrada no sistema, com opção de login social (Google) e um placeholder para futuro registro.
*   **Tela Principal (PLENITUDE):** Página inicial após o login, com uma mensagem sobre bem-estar.
*   **Tela de Perfil do Usuário:** Exibe informações básicas do usuário logado (nome e email) e uma imagem de perfil genérica.
*   **Navegação Intuitiva:** Barra de navegação inferior para fácil acesso entre as telas principais e opção de logout.
*   **Design Moderno e Responsivo:** Interface com tema escuro (azul marinho e roxo escuro), adaptável a diferentes tamanhos de tela.
*   **Funcionalidades PWA:**
    *   Instalável na tela inicial do dispositivo.
    *   Suporte básico para funcionamento offline (cache de recursos estáticos).
*   **Código Comentado:** Todo o código fonte está comentado em português brasileiro para facilitar o entendimento e futuras manutenções.

## Tecnologias Utilizadas

*   **Next.js (v14+ com App Router):** Framework React para desenvolvimento de aplicações web modernas e performáticas.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática, aumentando a robustez do código.
*   **Tailwind CSS:** Framework CSS utility-first para estilização rápida e customizável.
*   **Firebase:** Plataforma do Google para desenvolvimento de aplicativos, utilizada aqui para:
    *   **Authentication:** Gerenciamento de login com Google.
    *   **(Potencialmente) Firestore Database:** Para futuras funcionalidades que necessitem de banco de dados.
*   **next-pwa:** Plugin para Next.js que facilita a configuração de PWAs.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado em sua máquina:

*   [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
*   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [Yarn](https://yarnpkg.com/)

## Configuração do Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

1.  **Clone o Repositório (ou Descompacte os Arquivos):**
    Se você recebeu os arquivos em um formato compactado (ex: .zip), descompacte-os em um diretório de sua preferência.

2.  **Crie um Projeto no Firebase:**
    *   Acesse o [Console do Firebase](https://console.firebase.google.com/).
    *   Clique em "Adicionar projeto" e siga as instruções para criar um novo projeto.
    *   No seu projeto Firebase, vá para "Authentication" (Autenticação) no menu lateral.
    *   Na aba "Sign-in method" (Método de login), ative o provedor "Google". Forneça o e-mail de suporte necessário.
    *   Ainda no console do Firebase, vá para "Configurações do Projeto" (ícone de engrenagem no canto superior esquerdo).
    *   Na aba "Geral", role para baixo até a seção "Seus apps".
    *   Clique no ícone `</>` para adicionar um app da Web.
    *   Registre o app (dê um apelido, ex: "Plenitude PWA"). Não é necessário configurar o Firebase Hosting neste momento, a menos que deseje.
    *   Após o registro, o Firebase fornecerá um objeto de configuração `firebaseConfig` com suas chaves de API. **Copie esses valores.**

3.  **Configure as Variáveis de Ambiente:**
    *   No diretório raiz do projeto `plenitude-pwa`, você encontrará um arquivo chamado `.env.local.example` ou `.env.local` (se já foi criado com valores de exemplo).
    *   Se existir apenas o `.env.local.example`, renomeie-o para `.env.local`.
    *   Abra o arquivo `.env.local` e substitua os valores de placeholder (ex: `"SUA_API_KEY_AQUI_COPIADA_DO_FIREBASE"`) pelas credenciais REAIS do seu projeto Firebase que você copiou no passo anterior.

    Exemplo do conteúdo do arquivo `.env.local` após a configuração:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXX"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="seu-projeto-id.firebaseapp.com"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="seu-projeto-id"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="seu-projeto-id.appspot.com"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789012"
    NEXT_PUBLIC_FIREBASE_APP_ID="1:123456789012:web:XXXXXXXXXXXXXXXXXXXXXX"
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX" # Opcional
    ```
    **IMPORTANTE:** O arquivo `.env.local` contém informações sensíveis. Certifique-se de que ele está listado no seu arquivo `.gitignore` para não ser enviado para repositórios públicos.

4.  **Instale as Dependências:**
    Navegue até o diretório raiz do projeto (`plenitude-pwa`) pelo terminal e execute o comando para instalar todas as dependências do projeto:
    ```bash
    npm install
    ```
    Ou, se você preferir usar Yarn:
    ```bash
    yarn install
    ```

5.  **Execute o Projeto em Modo de Desenvolvimento:**
    Após a instalação das dependências, inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    Ou, com Yarn:
    ```bash
    yarn dev
    ```
    A aplicação estará disponível em [http://localhost:3000](http://localhost:3000) (ou outra porta, se a 3000 estiver ocupada).

## Build para Produção

Para criar uma versão otimizada para produção, execute:

```bash
npm run build
```
Ou, com Yarn:
```bash
yarn build
```

Após o build, você pode iniciar o servidor de produção com:

```bash
npm start
```
Ou, com Yarn:
```bash
yarn start
```

## Estrutura do Projeto (Principais Pastas e Arquivos)

```
plenitude-pwa/
├── public/                  # Arquivos estáticos (imagens, ícones, manifest.json)
│   ├── icons/               # Ícones do PWA
│   ├── manifest.json        # Manifesto do PWA
│   └── user-placeholder.svg # Imagem genérica de usuário
├── src/
│   ├── app/                 # Rotas e páginas da aplicação (App Router)
│   │   ├── (auth)/          # Grupo de rotas para páginas autenticadas
│   │   │   ├── perfil/      # Tela de Perfil
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx   # (Opcional, se houver layout específico para auth)
│   │   ├── login/           # Tela de Login
│   │   │   └── page.tsx
│   │   ├── layout.tsx       # Layout principal da aplicação
│   │   └── page.tsx         # Tela Principal (Homepage)
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/            # Contextos React (ex: AuthContext)
│   │   └── AuthContext.tsx
│   ├── lib/                 # Bibliotecas e configurações (ex: Firebase)
│   │   └── firebase.ts
│   └── globals.css          # Estilos globais e configuração do Tailwind
├── .env.local               # Variáveis de ambiente (NÃO versionar com chaves reais)
├── .eslintrc.json           # Configuração do ESLint
├── .gitignore               # Arquivos e pastas ignorados pelo Git
├── next.config.mjs          # Configuração do Next.js (incluindo PWA)
├── package.json             # Dependências e scripts do projeto
├── postcss.config.mjs       # Configuração do PostCSS (para Tailwind)
├── tailwind.config.ts       # Configuração do Tailwind CSS
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Este arquivo
```

## Considerações Adicionais

*   **Ícones do PWA:** Os ícones para o PWA estão localizados em `public/icons/`. Eles foram gerados a partir de um ícone base de 512x512px.
*   **Service Worker:** A configuração do `next-pwa` em `next.config.mjs` cuida do registro e gerenciamento do service worker. Em ambiente de desenvolvimento (`NODE_ENV === "development"`), o PWA é desabilitado para facilitar o debugging.
*   **Estilização:** O Tailwind CSS é usado para toda a estilização. As configurações podem ser encontradas em `tailwind.config.ts` e os estilos globais em `src/globals.css`.

Divirta-se explorando e desenvolvendo o PLENITUDE PWA!

