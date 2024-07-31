const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors({origin: '*'}));

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'SUCOS_FRUTAS'
});

// Conexão ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para o consultar os produtos
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM TABELA_DE_PRODUTOS';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
});

// Rota para adicionar produto
app.post('/', (req, res) => {
  const { nome, sabor, preco } = req.body;
  const sql = 'INSERT INTO TABELA_DE_PRODUTOS (NOME, SABOR, PRECO) VALUES (?, ?, ?)';
  db.query(sql, [nome, sabor, preco], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log('Produto adicionado com sucesso!');
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Tabela do Banco de Dados em: http://localhost:${PORT}`);
});
