CREATE DATABASE backharry;

CREATE TABLE bruxos (
    id  SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    casa VARCHAR(50) NOT NULL,
    idade INTEGER NOT NULL,
    habilidade VARCHAR(100) NOT NULL,
    status_sangue VARCHAR(50) NOT NULL,
    patrono VARCHAR(100) NOT NULL
);
INSERT INTO bruxos (nome, casa, idade, habilidade, status_sangue, patrono) VALUES 
('Harry Potter', 'Grifinória', 17, 'Apanhar o pomo de ouro', 'Mestiço', 'Cervo');


CREATE TABLE varinhas (
    id  SERIAL PRIMARY KEY,
    material VARCHAR(100) NOT NULL,
    comprimento DECIMAL NOT NULL,
    nucleo VARCHAR(100) NOT NULL,
    data_fabricacao DATE NOT NULL
);

INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES 
('Madeira de Teixo', 30.5, 'Pena de Fênix', '1991-07-31');
