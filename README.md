O projeto faz conexão com um banco de dados local, do MySQL. Para utilizar esse banco de dados, execute os seguintes scripts no MySQL:

CREATE DATABASE SUCOS_FRUTAS;

USE SUCOS_FRUTAS;

CREATE TABLE TABELA_DE_PRODUTOS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(255) NOT NULL,
    SABOR VARCHAR(255) NOT NULL,
    PRECO FLOAT NOT NULL
);

INSERT INTO TABELA_DE_PRODUTOS (NOME, SABOR, PRECO) VALUES
('Sabor da Montanha', 'Morango', 6.309),
('Linha Citros', 'Lima/Limão', 7.004),
('Videira do Campo', 'Uva', 8.41),
('Festival de Sabores', 'Açaí', 13.312),
('Clean', 'Laranja', 16.008),
('Light', 'Melancia', 4.555),
('Frescor do Verão', 'Manga', 5.1795),
('Linha Refrescante', 'Morango/Limão', 9.0105),
('Pedaços de Fruta', 'Maçã', 4.211);

Ao fim do comando, será cirado o banco de dados com o qual o API irá se comunicar. 

Outras informações:

O projeto foi desenvolvido utilizando as tecnologias:
    - Linguagem: JavaScript;
    - Runtime: NodeJs;
    - Framework: Express;
    - Database: MySQL