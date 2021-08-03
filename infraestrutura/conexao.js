const mysql = require("mysql");

const conexao = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "db_first_node",
  password: "pablowinck84",
});

module.exports = conexao;
