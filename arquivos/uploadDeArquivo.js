const fs = require("fs");

fs.createReadStream("./assets/download.jpeg")
  .pipe(fs.createWriteStream("./assets/luneixon-stream.jpeg"))
  .on("finish", () => {
    console.log('Imagem foi escrita com sucesso');
  });
