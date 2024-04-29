const express = require('express');

const { Pool } = require('pg');

const app = express();
const port = 4000;

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'backharry',
    password: 'ds564',
    port: 5432,
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
    res.send('Backend Harry Potter!');
});

app.get('/bruxos', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM bruxos');
        res.json({
            total: resultado.rowCount,
            bruxos: resultado.rows,
        })
    } catch (error) {
        console.log('Error ao buscar bruxos', error);
        res.status(500).send({ message: 'Erro ao buscar bruxos' });
    }
});

app.get('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM bruxos WHERE id = $1', [id]);
        res.send(resultado.rows[0]);
    } catch (error) {
        console.log('Error ao buscar bruxo', error);
        res.status(500).send({ message: 'Erro ao buscar bruxo' });
    }
});

app.post ('/bruxos', async (req, res) => {
    try {
        const { nome, casa, idade, habilidade, status_sangue, patrono } = req.body;
        await pool.query('INSERT INTO bruxos (nome, casa, idade, habilidade, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6)', [nome, casa, idade, habilidade, status_sangue, patrono]);
        res.send({ message: 'Bruxo cadastrado com sucesso!' });
    }catch (error) {
        console.log('Error ao cadastrar bruxo', error);
        res.status(500).send({ message: 'Erro ao cadastrar bruxo' });
    }
});

app.put('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, casa, idade, habilidade, status_sangue, patrono } = req.body;
        console.log('Dados recebidos no PUT:', req.body); 
        await pool.query('UPDATE bruxos SET nome = $1, casa = $2, idade = $3, habilidade = $4, status_sangue = $5, patrono = $6 WHERE id = $7', [nome, casa, idade, habilidade, status_sangue, patrono, id]);
        res.send({ message: 'Bruxo atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar bruxo:', error.message); 
        res.status(500).send({ message: 'Erro ao atualizar bruxo' });
    }
});

app.delete('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM bruxos WHERE id = $1', [id]);
        res.send({ message: 'Bruxo deletado com sucesso!' });
    }catch (error) {
        console.log('Error ao deletar bruxo', error);
        res.status(500).send({ message: 'Erro ao deletar bruxo' });
    }
});







