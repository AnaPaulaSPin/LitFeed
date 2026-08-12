USE litfeed_base;

-- Autor
INSERT INTO Autor (nome)
VALUES ('Lynn Painter');

-- Editora
INSERT INTO Editora (nome)
VALUES ('Intrínseca');

-- Gênero
INSERT INTO Genero (nome)
VALUES ('Comédia Romântica');

-- Gênero
INSERT INTO Genero (nome)
VALUES ('Suspense');

-- Gênero
INSERT INTO Genero (nome)
VALUES ('Comédia');

-- Livro 1
INSERT INTO Livro (
    titulo,
    isbn,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Confusões do amor',
    '978-8551014974',
    'A faxineira Abi Mariano precisa de um lugar para ficar durante uma semana e acaba se envolvendo em uma situação inesperada ao ser confundida com a namorada de Declan Powell, um executivo que precisa de uma namorada de mentira para um evento importante.',
    '\assets\DataBase\livros\confusoes-do-amor',
    (SELECT id FROM Autor WHERE nome = 'Lynn Painter'),
    (SELECT id FROM Genero WHERE nome = 'Comédia Romântica')
);

-- Edição
INSERT INTO Edicao (
    livro_id,
    editora_id,
    capa,
    total_paginas,
    ano
)
VALUES (
    (SELECT id FROM Livro WHERE isbn = '978-8551014974'),
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    '\assets\DataBase\livros\confusoes-do-amor',
    331,
    2026
);

-- Livro 2
INSERT INTO Livro (
    titulo,
    isbn,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Sorte no amor: Quem se apaixonar primeiro ganha',
    '978-8551010525',
    'Após términos recentes, Hallie Piper e Jack se conhecem em uma festa de casamento e acabam se reencontrando em um aplicativo de relacionamentos. Os dois decidem fazer uma aposta para descobrir quem encontrará o amor primeiro, mas a amizade entre eles faz com que seus sentimentos se tornem cada vez mais difíceis de ignorar.',
    '\assets\DataBase\livros\sorte-no-amor-quem-se-apaixonar-primeiro-ganha',
    (SELECT id FROM Autor WHERE nome = 'Lynn Painter'),
    (SELECT id FROM Genero WHERE nome = 'Comédia Romântica')
);

INSERT INTO Edicao (
    livro_id,
    editora_id,
    capa,
    total_paginas,
    ano
)
VALUES (
    (SELECT id FROM Livro WHERE isbn = '978-8551010525'),
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    '\assets\DataBase\livros\sorte-no-amor-quem-se-apaixonar-primeiro-ganha',
    291,
    2025
);

-- livro 3
INSERT INTO Livro (
    titulo,
    isbn,
    sinopse,
    capa,
    autor_id,
    genero_id
) VALUES (
    'Nada é por acaso',
    '978-8551018842',
    'Isabella Shay consegue o emprego dos seus sonhos, mas no primeiro dia, após uma confusão com um café, conhece Blake Phillips. A atração entre os dois é imediata, mas eles descobrem que trabalham na mesma empresa, o que torna o relacionamento entre eles complicado.',
    'assets\DataBase\livros\nada-e-por-acaso',
    1,
    1
);

-- livro 4
INSERT INTO Livro (
    titulo,
    isbn,
    sinopse,
    autor_id
)
VALUES (
    'Patinando no amor',
    '978-8551016435',
    'Dani e Alec eram melhores amigos desde a infância, mas perderam o contato quando ela se mudou de cidade. Anos depois, Dani retorna para o último ano do ensino médio e reencontra Alec, agora uma estrela do hóquei. Quando acontecimentos inesperados os aproximam e os dois precisam fingir ser um casal, antigos segredos e sentimentos começam a vir à tona.',
    (SELECT id FROM Autor WHERE nome = 'Lynn Painter')
);

INSERT INTO Edicao (
    idLivro,
    idEditora,
    isbn,
    data_publicacao,
    paginas,
    idioma,
    capa
)
VALUES (
    (SELECT id FROM Livro WHERE titulo = 'Patinando no amor'),
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    '978-8551016435',
    '2026-02-02',
    440,
    'Português',
    '\assets\DataBase\livros\patinando-no-amor'
);

-- livro 5
INSERT INTO Livro (
    titulo,
    isbn,
    sinopse,
    autor_id
)
VALUES (
    'Melhor do que nos filmes',
    '978-6555607253',
    'Elizabeth Buxbaum sempre acreditou que seu vizinho Wesley Bennett não seria um bom namorado. Quando seu amor de infância, Michael Young, retorna à cidade, Liz decide conquistar o garoto dos seus sonhos com a ajuda do vizinho que tanto detesta. Porém, à medida que os dois se aproximam, Liz começa a questionar tudo o que sabe sobre o amor e percebe que seu final feliz pode ser diferente do que imaginava.',
    (SELECT id FROM Autor WHERE nome = 'Lynn Painter')
);

