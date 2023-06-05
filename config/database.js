

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'prueba',
  port: 3306
});

db.connect((error) => {
  if (error) 
  throw error;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
