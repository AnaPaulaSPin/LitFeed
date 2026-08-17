
SELECT * FROM editora;
SELECT * FROM genero;

DELETE FROM genero WHERE id = 6;
ALTER TABLE Autor
ADD COLUMN foto VARCHAR(255);

SET SQL_SAFE_UPDATES = 0;

UPDATE Autor
SET foto = 'assets\\DataBase\\Autores\\Lynn-painter.jpg'
WHERE nome = 'Lynn Painter';

UPDATE Autor
SET foto = 'assets\\DataBase\\Autores\\sarah-adams.png'
WHERE nome = 'Sarah Adams';

-- ATUALIZAR FOTO DOS AUTORES
UPDATE Autor
SET foto = 'assets\\DataBase\\Autores\\fiodor-dostoievski.jpg'
WHERE nome = 'Fiódor Dostoiévski';

UPDATE Autor
SET foto = 'assets\\DataBase\\Autores\\john-macarthur.jpg'
WHERE nome = 'John MacArthur';

UPDATE Autor
SET foto = 'assets\\DataBase\\Autores\\paul-washer.jpg'
WHERE nome = 'Paul Washer';

UPDATE Autor
SET foto = 'assets\\DataBase\\Autores\\machado-de-assis.jpg'
WHERE nome = 'Machado de Assis';

UPDATE Autor
SET foto = 'assets\\DataBase\\Autores\\c-s-lewis.jpg'
WHERE nome = 'C.S. Lewis';


DROP TABLE publicacao;

SHOW TABLES;

DESCRIBE publicacao;

SHOW CREATE TABLE publicacao;

ALTER TABLE publicacao
DROP COLUMN id_usuario,
DROP COLUMN id_edicao,
DROP COLUMN id_genero;

ALTER TABLE publicacao
DROP FOREIGN KEY FK1fkvjdmffoiojunm70k71ps4v,
DROP FOREIGN KEY FK7i496gr45h3rstrg4llkcjn6q,
DROP FOREIGN KEY FKfmx5o13ybwqeiee1finmwdi48;

-- ATUALIZAR FOTO DAS EDITORAS
UPDATE Editora
SET logo = 'assets\\DataBase\\Editoras\\intrinseca.jpg'
WHERE nome = 'Intrínseca';

UPDATE Editora
SET logo = 'assets\\DataBase\\Editoras\\Editora-34.jpg'
WHERE nome = 'Editora 34';

UPDATE Editora
SET logo = 'assets\\DataBase\\Editoras\\Thomas-Nelson-Brasil.jpg'
WHERE nome = 'Thomas Nelson Brasil';

UPDATE Editora
SET logo = 'assets\\DataBase\\Editoras\\Editora-Fiel.jpg'
WHERE nome = 'Editora Fiel';

UPDATE Editora
SET logo = 'assets\\DataBase\\Editoras\\Principis.jpg'
WHERE nome = 'Principis';