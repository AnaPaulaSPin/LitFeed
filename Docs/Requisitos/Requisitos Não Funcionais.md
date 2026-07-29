# Requisitos Não Funcionais (RNF)

Os requisitos não funcionais definem as características de qualidade, desempenho, segurança, usabilidade e aspectos tecnológicos que devem ser atendidos pelo LitFeed durante seu desenvolvimento e operação.

---

## 🔒 Segurança

### RNF01 – Autenticação de Usuários

O sistema deverá exigir autenticação por meio de login para permitir o acesso às funcionalidades restritas da plataforma, garantindo que apenas usuários autenticados possam realizar ações como criar publicações, editar o perfil ou gerenciar sua biblioteca.

### RNF02 – Proteção de Credenciais

As senhas dos usuários deverão ser armazenadas de forma segura, utilizando técnicas de criptografia ou hash, de modo que não possam ser recuperadas em texto puro.

### RNF03 – Controle de Acesso

O sistema deverá garantir que apenas o autor de um conteúdo possa editá-lo ou excluí-lo, impedindo alterações indevidas por outros usuários.

### RNF04 – Proteção dos Dados

Os dados pessoais dos usuários deverão ser tratados de forma segura durante o armazenamento e a comunicação com o sistema, respeitando boas práticas de segurança da informação.

---

## ⚡ Desempenho

### RNF05 – Tempo de Resposta

As operações realizadas pelo usuário deverão apresentar tempo de resposta adequado, proporcionando uma navegação fluida e minimizando atrasos perceptíveis.

### RNF06 – Eficiência no Carregamento

As telas deverão ser carregadas de forma eficiente, mesmo quando houver grande quantidade de livros, publicações ou usuários cadastrados.

### RNF07 – Escalabilidade

A arquitetura da aplicação deverá permitir o crescimento da quantidade de usuários e informações sem comprometer significativamente o desempenho da plataforma.

---

## 💻 Usabilidade

### RNF08 – Facilidade de Uso

A interface deverá ser intuitiva e organizada, permitindo que novos usuários utilizem as principais funcionalidades da plataforma sem necessidade de treinamento.

### RNF09 – Responsividade

A aplicação deverá adaptar sua interface para diferentes tamanhos de tela, garantindo uma boa experiência de uso em computadores, tablets e smartphones.

### RNF10 – Consistência Visual

Todas as telas deverão seguir a identidade visual definida para o LitFeed, mantendo padrões de cores, tipografia, componentes e elementos gráficos.

### RNF11 – Acessibilidade

A interface deverá priorizar boa legibilidade, contraste adequado entre cores e componentes de fácil interação, buscando oferecer uma experiência acessível ao maior número possível de usuários.

---

## 🛠️ Tecnológicos

### RNF12 – Front-end

A interface da aplicação deverá ser desenvolvida utilizando o framework Angular, adotando uma arquitetura baseada em componentes.

### RNF13 – Back-end

A camada de serviços deverá ser desenvolvida utilizando Spring Boot, disponibilizando os recursos da plataforma por meio de uma API.

### RNF14 – Comunicação

A comunicação entre o front-end e o back-end deverá ocorrer por meio de uma API REST utilizando o protocolo HTTP e o formato JSON para troca de dados.

### RNF15 – Persistência de Dados

As informações da plataforma deverão ser armazenadas em um banco de dados relacional, garantindo persistência, integridade e consistência dos dados.

---

## 📈 Qualidade

### RNF16 – Modularidade

O sistema deverá ser desenvolvido de forma modular, facilitando a manutenção, reutilização de componentes e evolução da aplicação.

### RNF17 – Organização do Código

O código-fonte deverá seguir boas práticas de desenvolvimento, incluindo padronização de nomenclaturas, separação de responsabilidades e documentação quando necessária.

### RNF18 – Manutenibilidade

A arquitetura do sistema deverá permitir a implementação de novas funcionalidades com o menor impacto possível sobre os módulos já existentes.

### RNF19 – Escalabilidade da Arquitetura

A estrutura do projeto deverá possibilitar sua evolução contínua, permitindo a adição de novos módulos e funcionalidades sem necessidade de reestruturações significativas.

### RNF20 – Compatibilidade

A aplicação deverá ser compatível com os principais navegadores modernos, garantindo funcionamento adequado e experiência consistente para os usuários.