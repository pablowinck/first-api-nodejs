const customExpress = require("./config/customExpress.js");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("\nConectado com sucesso!\n");

    Tabelas.init(conexao);

    const porta = 4449;

    const app = customExpress();

    app.listen(porta, () => {
      console.log("\nServidor rodando na porta " + porta + "\n");
    });
  }
});
