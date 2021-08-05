const red = "\x1b[31m";
const green = "\x1b[32m";

class Tabelas {

  init(conexao) {
    this.conexao = conexao;
    this.criarAtendimentos();
    this.criarPets();
  }

  criar(sql, tabela) {
    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(red, "\n\n" + erro + "\n\n");
      } else {
        console.log(green, " ++ Tabela " + tabela + " está criada");
      }
    });
  }

  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";
    this.criar(sql, "Atendimento");
  }

  criarPets() {
    const query =
      "CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY (id))";
    this.criar(query, "Pets");
  }
}

module.exports = new Tabelas();
