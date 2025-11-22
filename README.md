## 👨🏾‍🍳 Base de Conhecimento | Receitas com Gemini 🚀

> **Projeto desenvolvido durante a imersão dev com Google Gemini na Alura.**
> Este site é uma base de conhecimento de receitas, demonstrando como é possível construir uma aplicação robusta utilizando apenas tecnologias web estáticas e a inteligência do Google Gemini.

<img src="https://github.com/gw-devf/recipe-knowledge-base/blob/main/assets/man-cook.png?raw=true" alt="Ilustração de homem cozinhando" width="400">

---

### ✨ Visão Geral e Desafios da Imersão

Este projeto nasceu na semana intensiva da Imersão Dev com Google Gemini na Alura. O desafio era desenvolver um site funcional (HTML, CSS, JavaScript) consumindo dados gerados e estruturados com a ajuda da Inteligência Artificial.

#### **Superando Limitações**

Inicialmente, explorei a possibilidade de usar APIs públicas de receitas. No entanto, o cenário da imersão exigia o uso exclusivo de arquivos estáticos (via GitHub Pages), o que tornava inviável o consumo direto de APIs externas.

- **Decisão Estratégica:** Evitei APIs externas complexas (como aquelas que exigem chaves ou tradução de conteúdo em massa) para garantir a conformidade com as regras do evento, mantendo o foco na **qualidade do código** e na **criatividade** exigidas para concorrer às premiações.
- **Solução Customizada:** Para contornar a limitação, criei minha **própria estrutura de dados JSON**, categorizando as receitas e garantindo que o conteúdo fosse consumido de forma eficiente pelo front-end estático.

---

### 💡 Funcionalidades e Implementações

O projeto não se limita a exibir receitas, incorporando features que demonstram domínio das tecnologias front-end e interação com dados.

| Recurso                     | Descrição                                                                                                                                                |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Consumo de Receitas**     | Estrutura JSON personalizada consumida para popular a lista principal de receitas, separadas por categorias.                                             |
| **"Me Impressione"**        | Funcionalidade implementada em JavaScript que gera um **número randômico** baseado nos IDs do JSON para exibir uma receita surpresa.                     |
| **Página "Sobre" Dinâmica** | Esta página consome dados da **API do GitHub** (nome, foto, username e bio) para criar um resumo dinâmico sobre o desenvolvedor e o contexto do projeto. |

<img src="https://github.com/gw-devf/recipe-knowledge-base/blob/main/assets/woman-cook.png?raw=true" alt="Ilustração de mulher cozinhando" width="400">

---

### 🛠️ Desenvolvimento e Boas Práticas

O desenvolvimento foi guiado por princípios de código limpo, semântica e padronização.

| Aspecto                | Detalhes Técnicos                                                                                                                                          |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tecnologias Base**   | **HTML5, CSS3, JavaScript** (Vanilla).                                                                                                                     |
| **Assistência de IA**  | O **Google Gemini** foi fundamental na alimentação dos dados JSON, e na criação da logo e das imagens de acordo com a paleta de cores.                     |
| **Arquitetura CSS**    | Uso rigoroso do padrão **BEM** (Block Element Modifier) para garantir escalabilidade e manutenção do estilo.                                               |
| **Organização JS**     | Segregação e organização das funcionalidades em diferentes arquivos JavaScript, promovendo a modularidade do código.                                       |
| **Controle de Versão** | **Conventional Commits** para padronização e fluxo de desenvolvimento baseado na branch temporária `develop` até o deploy final.                           |
| **Design**             | Criação da UI no **Figma**, utilizando as fontes **Playfair** e **Poppins**, com uma paleta de cores primária em tons de laranja/amarelo e cinzas neutros. |

> **Nota:** O protótipo do Figma será anexado ao README futuramente, após uma organização mais completa.

---

### 🔗 Acesse e Explore!

Clique no link abaixo para navegar na Base de Conhecimento de Receitas e ver o projeto em funcionamento:

[**Acesse a Base de Conhecimento de Receitas**](https://gw-devf.github.io/recipe-knowledge-base/)

---

#imersaodevgoogle #ia #html #css #javascript
