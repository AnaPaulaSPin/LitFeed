USE litfeed_base;

DROP TABLE Publicacao;

SELECT * FROM livro;

UPDATE edicao
SET capa = 'assets/DataBase/livros/confusoes-do-amor.jpg'
WHERE id = 1;

DELETE FROM publicacao
WHERE id = 4;

