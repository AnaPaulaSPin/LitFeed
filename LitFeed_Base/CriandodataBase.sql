USE litfeed_base;
-- =====================================================
-- CADASTROS BASE (Autor, Gênero, Editora)
-- =====================================================

-- AUTOR
INSERT INTO Autor (nome)
VALUES ('Lynn Painter');

-- GÊNERO
INSERT INTO Genero (nome)
VALUES ('Romance');

-- EDITORA
INSERT INTO Editora (nome)
VALUES ('Intrínseca');
-- =====================================================
-- LIVRO 1: Melhor do que nos filmes
-- =====================================================

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Melhor do que nos filmes',
    'Elizabeth Buxbaum sempre soube que seu vizinho não seria um bom namorado. Apesar de todos acharem Wesley Bennett simpático e muito bonito, Liz tinha certeza de que, na verdade, ele era um chato de galochas. Mas Michael Young era diferente. O amor de infância de Liz estava à altura dos protagonistas das comédias românticas que ela tanto gostava, só que havia se mudado para longe quando os dois ainda eram crianças. Dez anos depois, ele estava de volta, mais lindo e charmoso do que nunca. Esbarrar com o garoto na escola foi como um sinal do universo. O último ano do ensino médio clamava por acontecimentos grandiosos, um baile inesquecível e momentos apaixonantes. Por isso, como uma boa romântica incurável, Liz estava determinada a fazer qualquer coisa para conquistar o verdadeiro amor. Até mesmo pedir ajuda ao vizinho irritante. O plano era fazer com que Michael notasse sua existência e a convidasse para o baile de formatura. Mas, à medida que Wes e Liz se aproximam, ela vai questionar tudo o que sabe sobre o amor e descobrir que talvez seu felizes para sempre seja surpreendente e melhor do que ela poderia imaginar.',
    'assets\\DataBase\\melhor-do-que-nos-filmes.jpg',
    (SELECT id FROM Autor WHERE nome = 'Lynn Painter'),
    (SELECT id FROM Genero WHERE nome = 'Romance')
);

-- EDIÇÃO (eBook)
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
    (SELECT id FROM Livro WHERE titulo = 'Melhor do que nos filmes'),
    '978-6555607253',
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    'assets\\DataBase\\melhor-do-que-nos-filmes.jpg',
    354,
    2023,
    'eBook Kindle'
);

-- EDIÇÃO (Capa comum)
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
    (SELECT id FROM Livro WHERE titulo = 'Melhor do que nos filmes'),
    '978-6555607284',
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    'assets\\DataBase\\livros\\melhor-do-que-nos-filmes.jpg',
    352,
    2023,
    'Capa comum'
);


-- =====================================================
-- LIVRO 2: Amor por engano
-- =====================================================

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Amor por engano',
    'Depois de ser demitida e descobrir que seu namorado estava tendo um caso com uma colega de trabalho, Olivia decide fechar esse ciclo desastroso queimando as cartas que seu ex lhe escrevia. Ela só não esperava que, ao fazer isso, acabaria incendiando o prédio inteiro. Sem emprego, sem casa e sem namorado, Olivia vai morar com o irmão e o amigo irritante e extremamente gato dele, Colin Beck. Tudo parece estar dando errado, mas, quando ela recebe uma mensagem de um número desconhecido, sua vida começa a ficar mais emocionante. O que deveria ter sido um engano acaba se transformando em um relacionamento envolvente, mesmo que ela não saiba a identidade do Cara do Número Desconhecido. Colin Beck sempre considerou Olivia a irmã mais nova e insuportável do seu melhor amigo. Mas aquela garotinha destrambelhada que ele conhecia se tornou uma mulher atraente e divertida. Quando Olivia se muda para seu apartamento e uma vontade incontrolável de ficar cada vez mais perto dela começa a surgir, a preocupação toma conta de Colin. Ele tem certeza de que consegue manter distância de Olivia, até descobrir que ela é a garota anônima com quem vem tendo conversas há semanas, desde que mandou uma mensagem sem querer para o número dela. Olivia e Colin não se suportam, mas a química entre eles é inegável e, por mais que tentem, não conseguem ficar longe um do outro. Será que um engano pode fazer esse casal improvável dar certo?',
    'assets\\DataBase\\amor-por-engano.jpg',
    (SELECT id FROM Autor WHERE nome = 'Lynn Painter'),
    (SELECT id FROM Genero WHERE nome = 'Romance')
);

-- EDIÇÃO (Física)
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
    (SELECT id FROM Livro WHERE titulo = 'Amor por engano'),
    '978-6555606300',
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    'assets\\DataBase\\amor-por-engano.jpg',
    304,
    2023,
    'Capa comum'
);


-- =====================================================
-- LIVRO 3: Não é como nos filmes (Melhor do que nos filmes – vol. 2)
-- =====================================================

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Não é como nos filmes (Melhor do que nos filmes – vol. 2)',
    'Dois anos depois de terminarem, Wes volta para a universidade decidido a reconquistar Liz, sua grande paixão. Mas ela não pretende facilitar as coisas: além de um namorado novo, tem aulas, trabalho e um estágio para dar conta, e o reencontro com Wes só complica ainda mais sua vida. Entre memórias do passado e referências à cultura pop, os dois precisam decidir se ainda há espaço para um final feliz.',
    'assets\\DataBase\\nao-e-como-nos-filmes.jpg',
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
    (SELECT id FROM Livro WHERE titulo = 'Não é como nos filmes (Melhor do que nos filmes – vol. 2)'),
    '978-8551014158',
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    'assets\\DataBase\\nao-e-como-nos-filmes.jpg',
    416,
    2024,
    'Capa comum'
);


-- =====================================================
-- LIVRO 4: Patinando no amor
-- =====================================================

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Patinando no amor',
    'Dani e Alec eram melhores amigos de infância, até que ela se mudou de cidade. Anos depois, ela volta para cursar o último ano do ensino médio e reencontra Alec, agora uma estrela do hóquei local, bem diferente do garoto que ela conhecia. Após um mal-entendido os reaproximar, os dois precisam fingir namorar, e a farsa acaba reacendendo sentimentos antigos, expondo segredos de família e revelando o verdadeiro motivo pelo qual Alec se afastou dela.',
    'assets\\DataBase\\patinando-no-amor.jpg',
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
    (SELECT id FROM Livro WHERE titulo = 'Patinando no amor'),
    '978-8551016428',
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    'assets\\DataBase\\patinando-no-amor.jpg',
    416,
    2026,
    'Capa comum'
);


-- =====================================================
-- LIVRO 5: Apostando no amor
-- =====================================================

-- LIVRO
INSERT INTO Livro (
    titulo,
    sinopse,
    capa,
    autor_id,
    genero_id
)
VALUES (
    'Apostando no amor',
    'Bailey e Charlie se conhecem no aeroporto, um garoto implicante que não para de puxar assunto com ela durante o voo. Anos depois, o destino os reaproxima: primeiro no cinema, depois como colegas de trabalho. Apesar de tudo que os diferencia, uma aproximação inesperada surge entre os dois quando fazem uma aposta sobre se homens e mulheres podem ser apenas amigos. Para complicar ainda mais, eles combinam de fingir um namoro para irritar o namorado da mãe de Bailey, e o que era só um jogo começa a mexer com os sentimentos de ambos.',
    'assets\\DataBase\\apostando-no-amor.jpg',
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
    (SELECT id FROM Livro WHERE titulo = 'Apostando no amor'),
    '978-8551009734',
    (SELECT id FROM Editora WHERE nome = 'Intrínseca'),
    NULL,
    368,
    2024,
    'Capa comum'
);