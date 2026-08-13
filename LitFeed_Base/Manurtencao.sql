UPDATE Livro SET capa = 'assets\\DataBase\\livros\\melhor-do-que-nos-filmes.jpg' WHERE titulo = 'Melhor do que nos filmes';
UPDATE Livro SET capa = 'assets\\DataBase\\livros\\amor-por-engano.jpg' WHERE titulo = 'Amor por engano';
UPDATE Livro SET capa = 'assets\\DataBase\\livros\\nao-e-como-nos-filmes.jpg' WHERE titulo = 'Não é como nos filmes (Melhor do que nos filmes – vol. 2)';
UPDATE Livro SET capa = 'assets\\DataBase\\livros\\patinando-no-amor.jpg' WHERE titulo = 'Patinando no amor';
UPDATE Livro SET capa = 'assets\\DataBase\\livros\\apostando-no-amor.jpg' WHERE titulo = 'Apostando no amor';
UPDATE Edicao SET capa = 'assets\\DataBase\\livros\\melhor-do-que-nos-filmes.jpg' WHERE livro_id = (SELECT id FROM Livro WHERE titulo = 'Melhor do que nos filmes');
UPDATE Edicao SET capa = 'assets\\DataBase\\livros\\amor-por-engano.jpg' WHERE livro_id = (SELECT id FROM Livro WHERE titulo = 'Amor por engano');

SELECT * FROM livro;
SELECT * FROM edicao;


UPDATE Edicao SET capa = 'assets\\DataBase\\livros\\nao-e-como-nos-filmes.jpg' WHERE id = 3;
UPDATE Edicao SET capa = 'assets\\DataBase\\livros\\patinando-no-amor.jpg' WHERE id = 4;
UPDATE Edicao SET capa = 'assets\\DataBase\\livros\\apostando-no-amor.jpg' WHERE id = 5;

