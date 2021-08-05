const mysql = require("mysql");

const conexao = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "db_first_node",
  password: "2309",
});

module.exports = conexao;
