# Production System 🚀

Este é um sistema completo de gestão de produção projetado para controlar o fluxo entre matérias-primas e produtos finais, permitindo visualizar a capacidade produtiva em tempo real com base no estoque disponível.

Link: https://production-system-jtjqk19h9-elias-nery-limas-projects.vercel.app

## 📋 Funcionalidades Principais

### 📦 Gestão de Produtos
* **CRUD Completo**: Registo, listagem, atualização e remoção de produtos.
* **Controle Financeiro**: Cada produto possui um nome e um preço unitário associado.
* **Ordenação**: Os produtos são exibidos priorizando os de maior valor de venda.

### 🛠️ Gestão de Matérias-Primas
* **Controle de estoque**: Registo de materiais com monitorização da quantidade disponível.
* **Gestão de Inventário**: Edição e atualização de quantidades em stock para refletir a realidade do armazém.

### ⚙️ Engenharia de Produção (Fichas Técnicas)
* **Associação de Materiais**: Define a "receita" de cada produto, especificando qual material e qual quantidade é necessária para produzir uma unidade.
* **Flexibilidade**: Permite editar ou remover os vínculos entre insumos e produtos a qualquer momento.

### 📊 Inteligência de Produção
* **Cálculo de Capacidade**: O sistema analisa o estoque atual e determina automaticamente quantas unidades de cada produto podem ser fabricadas.
* **Valor Potencial de Produção**: Calcula o valor monetário total que a fábrica pode gerar com os materiais que possui em mãos no momento.
* **Filtros Inteligentes**: A listagem de capacidade oculta automaticamente produtos que não possuem insumos suficientes para produção.

## 🏗️ Arquitetura do Projeto

O projeto é dividido em duas partes principais:

### Backend
- **Node.js**: Ambiente de execução.
- **Express**: Framework para construção da API REST.
- **PostgreSQL**: Banco de dados relacional.
- **node-postgres (pg)**: Driver para comunicação com o banco de dados.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **CORS**: Configuração de segurança para acesso entre diferentes domínios.

### Frontend
- **React (Vite)**: Biblioteca para construção da interface de usuário.
- **CSS3**: Estilização personalizada com layout responsivo (Grid e Flexbox).
- **Fetch API**: Comunicação assíncrona com o Backend.

---
**Desenvolvido por:** Elias Nery Lima