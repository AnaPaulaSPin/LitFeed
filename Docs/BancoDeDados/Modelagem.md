# 🗄️ Modelagem do Banco de Dados

## Visão Geral

O banco de dados do **LitFeed** foi desenvolvido pensando em dois pilares principais da plataforma:

- **A jornada individual de leitura**, permitindo que cada usuário organize seus livros, acompanhe seu progresso e registre suas experiências;
- **A interação entre leitores**, possibilitando uma comunidade literária com publicações, comentários e compartilhamento de opiniões.

A modelagem busca separar a organização pessoal do usuário das suas experiências de leitura, permitindo que a plataforma evolua futuramente com novos recursos.

---

# 📚 Organização da Jornada de Leitura

Um dos principais conceitos do LitFeed é diferenciar o livro que pertence à biblioteca do usuário da experiência que ele teve durante a leitura.

Para isso, foram criadas duas entidades principais:

---

## Biblioteca

A entidade **Biblioteca** representa os livros adicionados pelo usuário dentro da sua coleção pessoal.

Ela responde à pergunta:

> "Quais livros fazem parte da biblioteca deste usuário e qual é a situação atual deles?"

Exemplos:

- Quero ler;
- Lendo;
- Lido;
- Abandonado.

Além disso, ela armazena informações relacionadas ao acompanhamento atual da leitura, como:

- página atual;
- porcentagem concluída;
- datas de início e término.

### Relacionamentos

Um usuário pode possuir vários livros em sua biblioteca.

```text
Usuário (1) ---- (N) Biblioteca
```

Uma edição de livro pode estar presente na biblioteca de vários usuários.

```text
Edição (1) ---- (N) Biblioteca
```

---

## Leitura

A entidade **Leitura** representa uma experiência realizada pelo usuário com determinado livro.

Ela responde à pergunta:

> "Como foi a experiência desse usuário ao ler esse livro?"

Essa separação permite registrar:

- primeira leitura;
- releituras;
- diferentes avaliações;
- diferentes resenhas.

Exemplo:

Um usuário pode ter o livro **"Harry Potter"** na biblioteca e possuir:

- 1ª leitura em 2025, nota 5;
- 2ª leitura em 2026, nota 4.

### Relacionamento

Uma entrada da biblioteca pode possuir vários registros de leitura.

```text
Biblioteca (1) ---- (N) Leitura
```

Dessa forma, o sistema consegue manter o histórico da jornada literária do usuário.

---

# 📖 Estrutura dos Livros

A estrutura dos livros foi dividida em diferentes entidades para evitar repetição de informações.

---

## Livro

Representa a obra literária.

Exemplo:

> Harry Potter e a Pedra Filosofal

Contém informações gerais:

- título;
- autor;
- categoria;
- sinopse.

---

## Edição

Representa uma versão específica da obra.

Um mesmo livro pode possuir diferentes edições, como:

- capa diferente;
- editora diferente;
- quantidade de páginas diferente.

Exemplo:

```text
Livro:
Harry Potter e a Pedra Filosofal

Edições:
- Editora X - 300 páginas
- Editora Y - 350 páginas
```

### Relacionamentos

```text
Livro (1) ---- (N) Edição

Editora (1) ---- (N) Edição
```

---

# 👤 Usuários

A entidade **Usuário** armazena os dados necessários para identificação e personalização do perfil.

Ela possui informações como:

- nome;
- username;
- email;
- senha;
- foto de perfil;
- banner;
- biografia.

O perfil foi pensado para permitir personalização e representar a identidade do leitor dentro da comunidade.

---

# 🌐 Rede Social

Como o LitFeed possui uma proposta de comunidade literária, foram adicionadas entidades responsáveis pela interação entre usuários.

---

## Publicação

Representa conteúdos criados pelos usuários.

Uma publicação pode conter:

- texto;
- imagem;
- referência a um livro;
- data de criação.

Exemplos:

- opinião sobre uma leitura;
- foto de uma estante;
- atualização de meta de leitura.

### Relacionamentos

```text
Usuário (1) ---- (N) Publicação

Livro (1) ---- (N) Publicação
```

O livro é opcional, pois nem toda publicação precisa estar relacionada a uma obra.

---

## Comentário

Permite que usuários interajam com publicações.

Cada comentário possui:

- autor;
- publicação relacionada;
- conteúdo;
- data de criação.

### Relacionamentos

```text
Usuário (1) ---- (N) Comentário

Publicação (1) ---- (N) Comentário
```

---

## Curtidas

As curtidas possuem relacionamento muitos-para-muitos.

Isso acontece porque:

- um usuário pode curtir várias publicações;
- uma publicação pode receber curtidas de vários usuários.

Por isso são utilizadas tabelas intermediárias:

```text
Usuário (N) ---- Curtida ---- (N) Publicação
```

O mesmo conceito é aplicado aos comentários.

---

# 🤝 Seguidores

A entidade **Seguidor** representa a relação entre usuários dentro da comunidade.

Ela permite funcionalidades como:

- acompanhar outros leitores;
- criar feeds personalizados;
- descobrir novos perfis.

Como um usuário pode seguir várias pessoas e também ser seguido por várias pessoas, existe uma relação:

```text
Usuário (N) ---- (N) Usuário
```

Essa relação é armazenada pela tabela **Seguidor**.

---

# 📌 Resumo da Modelagem

A estrutura principal do banco segue a lógica:

```text
Usuário

 |
 |
 +---- Biblioteca
 |          |
 |          |
 |          +---- Leitura
 |
 |
 +---- Publicação
            |
            |
            +---- Comentário
            |
            +---- Curtidas


Livro
 |
 |
 +---- Edição
 |
 |
 +---- Biblioteca
 |
 |
 +---- Publicação
```

---

# Conceito Principal

A principal decisão da modelagem foi separar:

**Biblioteca → organização do livro pelo usuário**

**Leitura → histórico e experiência do usuário com o livro**

Essa separação permite que o LitFeed seja mais do que uma simples biblioteca digital, tornando-se uma plataforma onde leitores podem acompanhar sua evolução, registrar suas histórias e compartilhar suas experiências com uma comunidade.