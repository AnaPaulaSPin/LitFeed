# Planejamento e Documentação Inicial

# Visão Geral do Projeto

O **LitFeed** é um projeto de estudo desenvolvido com o objetivo de aprofundar meus conhecimentos em desenvolvimento de software por meio da construção de uma aplicação completa. Seu propósito principal não é, inicialmente, ser lançado como um produto comercial, mas servir como uma ferramenta de aprendizado prático, permitindo aplicar conceitos de front-end, back-end, banco de dados, arquitetura de software e demais tecnologias utilizadas durante minha formação.

Além do objetivo técnico, o projeto também busca unir uma das minhas maiores paixões: a leitura. A proposta é desenvolver uma plataforma voltada para leitores, inspirada em duas aplicações que utilizo e admiro: **Skoob** e **Maratona**.

O **Skoob** se destaca por sua proposta de rede social literária, permitindo que leitores compartilhem suas leituras, publiquem opiniões, acompanhem outros usuários e descubram novos livros por meio da interação da comunidade.

Já o **Maratona** possui uma abordagem mais voltada para a organização da jornada de leitura, oferecendo recursos como listas, metas, desafios, acompanhamento do progresso e uma interface visualmente agradável, que incentiva o registro da experiência de leitura.

A proposta do **LitFeed** é reunir as principais qualidades dessas duas plataformas em um único ambiente. O objetivo é oferecer uma experiência que combine o aspecto social da leitura com ferramentas de organização pessoal, permitindo que os usuários compartilhem suas experiências, acompanhem seu progresso, registrem metas e construam uma identidade como leitores.

Por se tratar de um projeto de aprendizado, diversas funcionalidades serão desenvolvidas gradualmente, acompanhando minha evolução técnica e servindo como oportunidade para estudar e aplicar boas práticas de desenvolvimento de software, arquitetura de sistemas e experiência do usuário.

---

# Objetivos

## Objetivo Geral

Desenvolver uma plataforma web voltada para leitores como forma de aprofundar os conhecimentos dos envolvidos no projeto em desenvolvimento de software, aplicando na prática conceitos de front-end, back-end, banco de dados, arquitetura de sistemas e experiência do usuário por meio da construção de uma aplicação completa.

## Objetivos Específicos

- Desenvolver habilidades em Angular, explorando a criação de componentes, roteamento, comunicação entre componentes, gerenciamento de estado da interface e boas práticas de desenvolvimento front-end.
- Aprimorar conhecimentos em Spring Boot, implementando uma API REST responsável pelo gerenciamento de usuários, livros, publicações e demais funcionalidades da plataforma.
- Aplicar conceitos de banco de dados, realizando a modelagem, persistência e manipulação de informações utilizando um sistema gerenciador de banco de dados relacional.
- Implementar um sistema de autenticação e autorização, permitindo o cadastro, login e controle de acesso às funcionalidades da plataforma de forma segura.
- Desenvolver uma aplicação full stack, integrando front-end, back-end e banco de dados em um único projeto, simulando o desenvolvimento de uma aplicação real.
- Praticar conceitos de UX (User Experience) e UI (User Interface), buscando criar uma plataforma intuitiva, organizada e visualmente agradável para os usuários.
- Aplicar boas práticas de arquitetura e organização de projetos, estruturando o código de forma modular, reutilizável e de fácil manutenção.
- Consolidar os conhecimentos adquiridos durante a graduação por meio da resolução de problemas reais encontrados ao longo do desenvolvimento da plataforma.

---

# Público-alvo

O **LitFeed** é destinado a pessoas apaixonadas pela leitura, independentemente do nível de experiência. A plataforma busca atender desde leitores iniciantes, que desejam criar o hábito da leitura, até leitores experientes que procuram um ambiente para registrar sua jornada literária e compartilhar suas experiências com outras pessoas.

O público-alvo é composto principalmente por jovens e adultos que utilizam a tecnologia como parte do seu cotidiano e valorizam tanto a organização das suas leituras quanto a interação com outros leitores.

Além de servir como uma ferramenta para acompanhar livros, metas e progresso de leitura, o LitFeed pretende oferecer um espaço acolhedor para a comunidade literária, incentivando a troca de recomendações, opiniões, resenhas e experiências.

A proposta é que a plataforma funcione como uma verdadeira rede social voltada para leitores, onde cada usuário possa construir sua identidade como leitor, compartilhar sua trajetória literária e descobrir novos livros por meio da interação com a comunidade.

Mais do que registrar livros lidos, o LitFeed busca incentivar o hábito da leitura, motivando seus usuários a estabelecer metas, acompanhar sua evolução e transformar a leitura em uma experiência social, organizada e agradável.

---

# Proposta da Plataforma

O **LitFeed** propõe uma nova forma de vivenciar a leitura, reunindo em um único ambiente a organização pessoal e a interação social entre leitores.

Diferentemente de plataformas voltadas exclusivamente para o gerenciamento de livros ou apenas para a interação entre usuários, o LitFeed busca oferecer uma experiência flexível, permitindo que cada pessoa utilize a plataforma da maneira que melhor se adapte ao seu perfil.

O usuário poderá utilizar o LitFeed como um diário de leitura, registrando seu progresso, organizando listas personalizadas, estabelecendo metas e acompanhando sua evolução como leitor. Ao mesmo tempo, poderá optar por compartilhar sua jornada com a comunidade por meio de publicações, resenhas, recomendações e interações com outros leitores.

Um dos princípios da plataforma é oferecer maior liberdade e controle sobre o conteúdo compartilhado. Cada usuário poderá decidir quais informações deseja tornar públicas, compartilhar apenas com seguidores ou manter privadas, permitindo que a plataforma seja utilizada tanto como uma rede social quanto como um espaço pessoal de registro literário.

A personalização também é um dos pilares do LitFeed. O perfil deverá refletir a identidade de cada leitor, permitindo a organização de listas próprias, a personalização do perfil e a construção de uma biblioteca que represente sua trajetória de leitura.

Além disso, a plataforma buscará incentivar a descoberta de novos livros por meio de recomendações personalizadas, baseadas nos interesses, avaliações e hábitos de leitura de cada usuário, criando uma experiência cada vez mais relevante e acolhedora.

Mais do que registrar livros, o LitFeed tem como propósito transformar a leitura em uma experiência social, organizada e personalizada, permitindo que cada usuário escolha a forma como deseja compartilhar sua jornada literária.

---

# Funcionalidades

As funcionalidades do LitFeed estão organizadas em módulos, representando os principais recursos disponíveis na plataforma.

## Conta

- Cadastro de usuários.
- Login e logout.
- Recuperação de senha.
- Gerenciamento da conta.

## Perfil

- Edição de foto de perfil e banner.
- Personalização do perfil.
- Biografia e informações do leitor.
- Configuração de privacidade.
- Visualização de estatísticas de leitura.

## Biblioteca

- Adicionar livros à biblioteca.
- Organizar livros em listas personalizadas.
- Marcar status de leitura (Quero Ler, Lendo, Lido, Abandonado, etc.).
- Criar metas e desafios pessoais.
- Registrar progresso de leitura.

## Social

- Publicar textos, imagens e atualizações sobre leituras.
- Curtir, comentar e compartilhar publicações.
- Seguir outros leitores.
- Feed personalizado de acordo com os interesses do usuário.
- Recomendação de perfis e conteúdos.

## Livros

- Avaliar livros.
- Escrever resenhas.
- Consultar informações sobre obras e autores.
- Descobrir novos livros por meio de recomendações.

## Personalização

- Criação de listas personalizadas.
- Organização da biblioteca conforme a preferência do usuário.
- Controle de visibilidade do perfil e das publicações.
- Recomendações baseadas nos hábitos e preferências de leitura.

## Recursos futuros

- Integração com Spotify para criação de playlists relacionadas às leituras.
- Stories de leitura.
- Clubes de leitura.
- Desafios comunitários.
- Sistema de conquistas e recompensas.
- Recomendações inteligentes utilizando algoritmos de personalização.

---

# Estrutura das Telas

A navegação do LitFeed foi planejada para separar a experiência do usuário em duas etapas principais: acesso público e acesso autenticado.

## Área Pública

As telas públicas são acessíveis a qualquer visitante, sem necessidade de autenticação.

### Tela Inicial

Primeira tela apresentada ao usuário. Tem como objetivo apresentar o LitFeed, sua proposta e seus principais recursos, além de incentivar o cadastro ou login na plataforma.

Nesta tela estarão disponíveis opções para:

- Conhecer a plataforma;
- Realizar login;
- Criar uma nova conta.

Enquanto não estiver autenticado, o usuário terá acesso apenas a esta área.

---

## Área Autenticada

Após realizar o login, o usuário terá acesso às funcionalidades da plataforma.

### Feed

Página principal da rede social, onde serão exibidas publicações, recomendações e atividades de acordo com os interesses e preferências do usuário.

### Explorar

Área destinada à descoberta de livros, autores, listas e novos leitores, permitindo ampliar a interação dentro da comunidade.

### Biblioteca

Espaço onde o usuário poderá organizar sua jornada de leitura, visualizar suas listas, acompanhar livros em andamento, metas, histórico e progresso de leitura.

### Perfil

Página dedicada à identidade do usuário dentro da plataforma. Nela estarão disponíveis informações pessoais, estatísticas, biblioteca, publicações, resenhas e demais conteúdos relacionados ao perfil.

### Perfil de Outro Usuário

Versão do perfil destinada à visualização de outros leitores, permitindo acompanhar publicações, biblioteca pública e demais informações disponibilizadas pelo proprietário do perfil.

### Livro

Página com informações detalhadas de uma obra, incluindo descrição, avaliações, resenhas, comentários, estatísticas e publicações relacionadas.

### Publicação

Tela destinada à visualização completa de uma publicação, permitindo interação por meio de comentários, curtidas e compartilhamentos.

### Configurações

Área responsável pelo gerenciamento da conta, preferências, privacidade, personalização e demais configurações do usuário.

### Editar Perfil

Tela destinada à personalização do perfil, permitindo alterar informações pessoais, foto, banner, biografia e outras configurações relacionadas à identidade do usuário.

---

# Regras de Negócio

As regras de negócio definem o comportamento esperado da plataforma e garantem consistência no funcionamento de suas funcionalidades.

## Usuários

- Um usuário pode criar apenas uma conta utilizando um mesmo endereço de e-mail.
- O nome de usuário (username) deve ser único.
- Cada usuário pode editar apenas o seu próprio perfil.
- O usuário poderá configurar a privacidade de seu perfil (público, privado ou visível apenas para seguidores).
- O usuário poderá alterar suas informações pessoais a qualquer momento.

## Livros e Biblioteca

- Um mesmo livro poderá estar em apenas um status de leitura por vez (Quero Ler, Lendo, Lido, Abandonado, etc.).
- O progresso de leitura poderá ser atualizado pelo usuário sempre que desejar.
- O usuário poderá criar listas personalizadas para organizar sua biblioteca.
- Um livro poderá pertencer a várias listas personalizadas simultaneamente.

## Avaliações e Resenhas

- Um usuário poderá registrar múltiplas resenhas para o mesmo livro desde que cada uma represente uma leitura diferente (releitura).
- Cada resenha ficará vinculada à leitura correspondente, permitindo ao usuário acompanhar a evolução de suas opiniões ao longo do tempo.
- O usuário poderá editar ou excluir suas próprias resenhas.
- A avaliação de uma leitura poderá ser alterada pelo próprio usuário.

## Publicações

- O usuário poderá criar, editar e excluir apenas suas próprias publicações.
- Cada publicação poderá ser configurada como pública, visível apenas para seguidores ou privada.
- As publicações poderão receber curtidas, comentários e compartilhamentos, respeitando as configurações de privacidade definidas pelo autor.
- O usuário poderá repostar publicações de outros usuários, desde que a publicação permita compartilhamento.

## Social

- Um usuário poderá seguir ou deixar de seguir outros usuários.
- O feed será personalizado de acordo com os interesses, interações e preferências de leitura do usuário.
- O usuário poderá bloquear outros usuários, impedindo novas interações entre ambos.

## Plataforma

- O acesso às funcionalidades principais da plataforma será permitido apenas para usuários autenticados.
- Visitantes não autenticados terão acesso apenas à página inicial e às telas de autenticação.
- As informações dos usuários deverão ser armazenadas de forma segura, respeitando boas práticas de autenticação e proteção de dados.

---

# Identidade Visual

A identidade visual do LitFeed foi desenvolvida para transmitir tecnologia, criatividade, conforto e o sentimento de comunidade entre leitores. A proposta é oferecer uma interface moderna, intuitiva e agradável, incentivando o usuário a permanecer na plataforma e tornar a leitura parte de sua rotina.

## Paleta de Cores

| Cor | Código | Utilização |
|------|---------|------------|
| Roxo (Principal) | `#6C63FF` | Logo, botões principais e elementos de destaque |
| Azul (Secundária) | `#3B82F6` | Links, componentes interativos e ações secundárias |
| Azul Claro | `#4CC9F0` | Notificações, informações e detalhes visuais |
| Branco | `#FFFFFF` | Fundo principal |
| Cinza Claro | `#F5F7FB` | Cards, áreas de conteúdo e seções |
| Cinza | `#5B6475` | Textos secundários |
| Cinza Escuro | `#2E3440` | Textos principais |
| Rosa | `#FF6B81` | Curtidas, favoritos e elementos de destaque |

**Gradiente oficial:** `#6C63FF → #3B82F6`

Este gradiente representa a união entre literatura e tecnologia, tornando-se um dos principais elementos da identidade visual do LitFeed.

---

## Tipografia

A tipografia foi escolhida priorizando legibilidade e uma aparência moderna.

**Fonte Principal:** Poppins

Utilizada em títulos, botões, menus e identidade da plataforma.

**Fonte Secundária:** Inter

Utilizada em textos, descrições, comentários e conteúdo das publicações.

---

## Logotipo

A identidade da marca é composta por um livro aberto integrado a um balão de conversa, simbolizando a união entre leitura e interação social.

> **Observação:** Inserir aqui a imagem principal do logotipo.

O nome **LitFeed** utiliza a tipografia principal e segue o gradiente oficial da plataforma, podendo também ser utilizado em versões monocromáticas quando necessário.

> **Observação:** Inserir aqui a versão tipográfica do logotipo.

---

## Estilo Visual

O LitFeed segue o conceito de **Flat Design**, priorizando simplicidade, conforto visual e organização.

As principais características da interface são:

- Interface limpa e organizada;
- Espaçamento amplo entre elementos;
- Bordas arredondadas;
- Cards com sombras suaves;
- Ilustrações vetoriais;
- Componentes responsivos;
- Animações discretas e fluidas.

Todas as decisões de design deverão seguir os seguintes princípios:

- Simplicidade;
- Conforto visual;
- Personalização;
- Comunidade;
- Consistência;
- Acessibilidade.

---

## Ícones

Os ícones utilizados na plataforma deverão seguir um padrão visual minimalista, com traços finos, bordas arredondadas e estilo moderno.

---

## Referências Visuais

O LitFeed foi inspirado em plataformas que oferecem experiências consolidadas para leitura, organização e interação social, utilizando-as como referência para boas práticas de usabilidade e design.

As principais inspirações são:

- Skoob;
- Goodreads;
- Instagram;
- X (Twitter);
- Discord;
- Notion.

O objetivo não é reproduzir essas plataformas, mas combinar suas melhores características para construir uma identidade própria.

---

## Personalidade da Marca

A identidade do LitFeed busca transmitir:

- Conhecimento;
- Comunidade;
- Criatividade;
- Tecnologia;
- Conforto;
- Acolhimento.

A plataforma foi concebida para ser um ambiente onde cada leitor possa organizar sua jornada de leitura, compartilhar experiências e construir conexões com outros leitores, respeitando seu próprio ritmo e forma de utilização.

**Conceito da marca:**

> "Sua jornada de leitura, do seu jeito."

---

# Roadmap

O desenvolvimento do LitFeed será realizado de forma incremental, permitindo a implementação gradual de novas funcionalidades e a evolução contínua da plataforma.

## 🚀 Fase 1 — Estrutura Inicial

**Objetivo:** construir a base da aplicação e a identidade da plataforma.

- Desenvolvimento da identidade visual;
- Criação das telas principais;
- Sistema de cadastro e login;
- Gerenciamento de usuários;
- Perfil do usuário;
- Estrutura inicial da biblioteca;
- Configuração das rotas da aplicação;
- Integração entre front-end e back-end.

---

## 📚 Fase 2 — Biblioteca e Leitura

**Objetivo:** implementar os recursos voltados à organização da jornada de leitura.

- Cadastro e gerenciamento de livros;
- Status de leitura (Quero Ler, Lendo, Lido, Abandonado, etc.);
- Avaliações e resenhas;
- Sistema de releituras;
- Progresso de leitura;
- Criação de listas personalizadas;
- Metas de leitura;
- Estatísticas básicas.

---

## 🌐 Fase 3 — Rede Social

**Objetivo:** desenvolver os recursos de interação entre leitores.

- Feed personalizado;
- Publicações;
- Curtidas;
- Comentários;
- Compartilhamentos;
- Sistema de seguir usuários;
- Perfil público de leitores;
- Descoberta de novos usuários.

---

## ✨ Fase 4 — Personalização

**Objetivo:** tornar a plataforma mais personalizada para cada usuário.

- Configuração de privacidade;
- Personalização do perfil;
- Organização da biblioteca;
- Recomendações baseadas em interesses;
- Melhorias na experiência do usuário (UX/UI);
- Sistema de notificações.

---

## 🚀 Fase 5 — Recursos Avançados

**Objetivo:** expandir as funcionalidades da plataforma.

- Stories de leitura;
- Clubes de leitura;
- Desafios literários;
- Sistema de conquistas;
- Recomendações inteligentes;
- Integração com Spotify;
- Compartilhamento externo de conteúdos.