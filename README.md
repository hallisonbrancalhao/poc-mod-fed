# ModFedLts - Microfrontends POC

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

![Angular](https://img.shields.io/badge/Angular-20.2.0-red)
![Nx](https://img.shields.io/badge/Nx-21.5.3-blue)
![Module Federation](https://img.shields.io/badge/Module%20Federation-0.18.0-green)

> 🚀 **POC (Proof of Concept)** - Demonstração de arquitetura de microfrontends usando Angular e Module Federation no ecossistema Nx.

Este projeto é um workspace [Nx](https://nx.dev) que demonstra como implementar uma arquitetura de microfrontends usando **Module Federation** com Angular. O projeto contém uma aplicação shell (host) e uma aplicação remota (gis) que trabalham em conjunto.

## 📁 Arquitetura

```
ModFedLts/
├── apps/
│   ├── shell/          # 🏠 Aplicação host (container principal)
│   └── gis/            # 🗺️ Aplicação remota (microfrontend)
├── nx.json             # Configurações do Nx
└── package.json        # Dependências do workspace
```

### Aplicações

- **Shell** (`apps/shell`): Aplicação host que orquestra os microfrontends
- **GIS** (`apps/gis`): Microfrontend remote que expõe rotas específicas

## 🚀 Início Rápido

### 1. Instalação

```bash
# Instalar dependências
npm install
```

### 2. Executar em Desenvolvimento

```bash
# Executar a aplicação shell com o remote GIS
nx serve shell --open --devRemotes=gis

# Ou executar apenas o shell (sem remotes)
nx serve shell --open
```

### 3. Executar Aplicações Separadamente

```bash
# Terminal 1 - Executar o remote GIS
nx serve gis

# Terminal 2 - Executar o shell
nx serve shell --open
```

## 🛠️ Comandos Úteis

### Desenvolvimento
```bash
# Criar um novo workspace Nx
npx create-nx-workspace@latest mod-fed --preset=apps

# Adicionar dependências
npx nx add @nx/angular@latest

# Criar um host
npx nx g @nx/angular:host shell --remotes=gis --addTailwind=true --e2eTestRunner=none

# Criar um remote
npx nx g @nx/angular:remote gis --host=shell --addTailwind=true --e2eTestRunner=none

# Servir shell com todos os remotes
nx serve shell --devRemotes=gis

# Servir apenas um remote específico
nx serve gis

# Build para produção
nx build shell
nx build gis
```

### Linting e Testes
```bash
# Executar linting
nx lint shell
nx lint gis

# Executar testes
nx test shell
nx test gis

# Executar todos os testes
nx run-many -t test
```

### Visualização do Grafo
```bash
# Ver dependências entre aplicações
nx graph
```

## 🔧 Configurações do Module Federation

### Shell (Host)
- **Nome**: `shell`
- **Porta**: `4200` (padrão)
- **Remotes**: `gis`

### GIS (Remote)
- **Nome**: `gis`
- **Porta**: `4201` (padrão)
- **Expõe**: `./Routes` (rotas do microfrontend)

## 📖 Conceitos Demonstrados

- ✅ **Module Federation**: Compartilhamento de código entre aplicações independentes
- ✅ **Microfrontends**: Arquitetura distribuída de frontend
- ✅ **Roteamento Dinâmico**: Carregamento lazy de rotas remotas
- ✅ **Desenvolvimento Independente**: Equipes podem trabalhar em aplicações separadas
- ✅ **Build e Deploy Independentes**: Cada microfrontend pode ser deployado separadamente

## 🔗 URLs de Desenvolvimento

- **Shell**: http://localhost:4200
- **GIS Remote**: http://localhost:4201

## 🏗️ Expandindo o Projeto

### Criar Nova Aplicação Remota

```bash
# Gerar nova aplicação remota
nx g @nx/angular:remote --name=<remote-name> --host=shell --addTailwind=true --e2eTestRunner=none
```

### Adicionar Novo Remote ao Shell

1. Atualizar `apps/shell/module-federation.config.ts`:
```typescript
remotes: ['gis', 'novo-remote'],
```

2. Configurar rotas no shell para consumir o novo remote

## 📚 Documentação de Referência

- [Nx Module Federation](https://nx.dev/recipes/module-federation)
- [Angular Module Federation](https://angular.io/guide/module-federation)
- [Module Federation Enhanced](https://github.com/module-federation/core)
