const express = require('express');

const { Pool } = require('pg');

const app = express();
const port = 4000;

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'atvbackend',
    password: 'ds564',
    port: 5432,
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
    res.send('Backend Harry Potter!');
});

