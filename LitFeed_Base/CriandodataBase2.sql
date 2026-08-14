-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Confusões do amor',
    'Abi Mariano precisa urgentemente de um lugar para ficar depois que seu apartamento é interditado, e acaba se hospedando às escondidas na cobertura onde trabalha como faxineira, aproveitando que o dono está viajando. Tudo corre bem até ela topar com os pais do proprietário, que a confundem com a namorada do filho. Declan Powell, um executivo focado apenas em subir na carreira, vê ali uma oportunidade: propõe que Abi finja ser sua namorada para aliviar a pressão da família e dos colegas de trabalho. O que começa como um acordo de conveniência vai se transformando em algo bem mais complicado do que qualquer um dos dois esperava.',
    'assets\\DataBase\\livros\\confusoes-do-amor.jpg',
    (SELECT id FROM Autor WHERE nome = 'Lynn Painter'),
    (SELECT id FROM Genero WHERE nome = 'Romance')
);

-- EDIÇÃO
INSERT INTO Edicao (
    livro_id,
    isbn,
    editora_id,
    capa,
    total_paginas,
    ano,
    formato
)
VALUES (
    (SELECT id FROM Livro WHERE titulo = 'Confusões do amor'),
    '978-8551014981',
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    'assets\\DataBase\\livros\\confusoes-do-amor.jpg',
    304,
    2026,
    'Capa comum'
);

-- AUTOR
INSERT INTO Autor (nome)
SELECT 'Fiódor Dostoiévski'
WHERE NOT EXISTS (SELECT 1 FROM Autor WHERE nome = 'Fiódor Dostoiévski');

-- EDITORA
INSERT INTO Editora (nome)
SELECT 'Editora 34'
WHERE NOT EXISTS (SELECT 1 FROM Editora WHERE nome = 'Editora 34');

-- GÊNERO
INSERT INTO Genero (nome)
SELECT 'Ficção'
WHERE NOT EXISTS (SELECT 1 FROM Genero WHERE nome = 'Ficção');

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Noites brancas',
    'Durante uma das célebres "noites brancas" do verão de São Petersburgo, quando o sol quase não se põe, um jovem solitário e sonhador conhece Nástienka numa ponte sobre o rio Nievá. Ao longo de quatro noites, os dois compartilham histórias e confidências, e o narrador se apaixona profundamente por ela, enquanto Nástienka aguarda o retorno de um amor do passado. Narrativa breve e lírica, é considerada uma das obras mais sensíveis e melancólicas de Dostoiévski sobre o amor, a solidão e a espera.',
    'assets\\DataBase\\livros\\noites-brancas.jpg',
    (SELECT id FROM Autor WHERE nome = 'Fiódor Dostoiévski'),
    (SELECT id FROM Genero WHERE nome = 'Ficção')
);

-- EDIÇÃO
INSERT INTO Edicao (
    livro_id,
    isbn,
    editora_id,
    capa,
    total_paginas,
    ano,
    formato
)
VALUES (
    (SELECT id FROM Livro WHERE titulo = 'Noites brancas'),
    '978-8573263350',
    (SELECT id FROM Editora WHERE nome = 'Editora 34'),
    'assets\\DataBase\\livros\\noites-brancas.jpg',
    96,
    2009,
    'Capa comum'
);

-- AUTOR
INSERT INTO Autor (nome)
SELECT 'John MacArthur'
WHERE NOT EXISTS (SELECT 1 FROM Autor WHERE nome = 'John MacArthur');

-- EDITORA
INSERT INTO Editora (nome)
SELECT 'Thomas Nelson Brasil'
WHERE NOT EXISTS (SELECT 1 FROM Editora WHERE nome = 'Thomas Nelson Brasil');

-- GÊNERO
INSERT INTO Genero (nome)
SELECT 'Religião'
WHERE NOT EXISTS (SELECT 1 FROM Genero WHERE nome = 'Religião');

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'O evangelho segundo Paulo: A essência das boas-novas',
    'Em O Evangelho segundo Paulo, John MacArthur analisa o que o apóstolo Paulo realmente ensinou sobre o Evangelho. A partir de passagens fundamentais de suas epístolas, o autor explica os principais aspectos das boas-novas pregadas por Paulo, apresentando um estudo das cartas paulinas e destacando a mensagem do Evangelho como o poder de Deus para salvar.',
    'assets\\DataBase\\livros\\o-evangelho-segundo-paulo-a-essencia-das-boas-novas.jpg',
    (SELECT id FROM Autor WHERE nome = 'John MacArthur'),
    (SELECT id FROM Genero WHERE nome = 'Religião')
);

-- EDIÇÃO
INSERT INTO Edicao (
    livro_id,
    isbn,
    editora_id,
    capa,
    total_paginas,
    ano,
    formato
)
VALUES (
    (SELECT id FROM Livro WHERE titulo = 'O evangelho segundo Paulo: A essência das boas-novas'),
    '978-8578602536',
    (SELECT id FROM Editora WHERE nome = 'Thomas Nelson Brasil'),
    'assets\\DataBase\\livros\\o-evangelho-segundo-paulo-a-essencia-das-boas-novas.jpg',
    240,
    2018,
    'Capa comum'
);

-- AUTOR
INSERT INTO Autor (nome)
SELECT 'Paul Washer'
WHERE NOT EXISTS (SELECT 1 FROM Autor WHERE nome = 'Paul Washer');

-- EDITORA
INSERT INTO Editora (nome)
SELECT 'Editora Fiel'
WHERE NOT EXISTS (SELECT 1 FROM Editora WHERE nome = 'Editora Fiel');

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'O verdadeiro Evangelho',
    'Em O Verdadeiro Evangelho, Paul Washer apresenta uma análise das verdades fundamentais do Evangelho, abordando temas como o pecado do homem, a justiça de Deus, o sacrifício e a ressurreição de Cristo. Baseado em exposições de Romanos 3, o livro busca apresentar aquilo que Deus fez em Cristo para ser justo e justificador daquele que tem fé em Jesus.',
    'assets\\DataBase\\livros\\o-verdadeiro-evangelho.jpg',
    (SELECT id FROM Autor WHERE nome = 'Paul Washer'),
    (SELECT id FROM Genero WHERE nome = 'Religião')
);

-- EDIÇÃO
INSERT INTO Edicao (
    livro_id,
    isbn,
    editora_id,
    capa,
    total_paginas,
    ano,
    formato
)
VALUES (
    (SELECT id FROM Livro WHERE titulo = 'O verdadeiro Evangelho'),
    '978-8581320359',
    (SELECT id FROM Editora WHERE nome = 'Editora Fiel'),
    'assets\\DataBase\\livros\\o-verdadeiro-evangelho.jpg',
    120,
    2017,
    'Capa comum'
);

-- AUTOR
INSERT INTO Autor (nome)
SELECT 'Machado de Assis'
WHERE NOT EXISTS (SELECT 1 FROM Autor WHERE nome = 'Machado de Assis');

-- EDITORA
INSERT INTO Editora (nome)
SELECT 'Principis'
WHERE NOT EXISTS (SELECT 1 FROM Editora WHERE nome = 'Principis');

-- GÊNERO
INSERT INTO Genero (nome)
SELECT 'Ficção Literária'
WHERE NOT EXISTS (SELECT 1 FROM Genero WHERE nome = 'Ficção Literária');

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'O Alienista',
    'O Alienista conta a história de Simão Bacamarte, um médico dedicado ao estudo da mente humana que decide construir um hospício na pequena cidade de Itaguaí, chamado Casa Verde. Ao investigar os limites entre a razão e a loucura, Bacamarte passa a questionar quem pode ser considerado realmente louco.',
    'assets\\DataBase\\livros\\o-alienista.jpg',
    (SELECT id FROM Autor WHERE nome = 'Machado de Assis'),
    (SELECT id FROM Genero WHERE nome = 'Ficção Literária')
);

-- EDIÇÃO
INSERT INTO Edicao (
    livro_id,
    isbn,
    editora_id,
    capa,
    total_paginas,
    ano,
    formato
)
VALUES (
    (SELECT id FROM Livro WHERE titulo = 'O Alienista'),
    '978-6550970376',
    (SELECT id FROM Editora WHERE nome = 'Principis'),
    'assets\\DataBase\\livros\\o-alienista.jpg',
    80,
    2019,
    'Capa comum'
);