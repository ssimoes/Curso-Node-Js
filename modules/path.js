const path = require('path');

//Apenas o nome do arquivo Atual.
console.log(path.basename(__filename));

//Nome do Diretorio Atual
console.log(path.dirname(__filename));

//Extensão do Arquivo
console.log(path.extname(__filename));

//Criar um objeto path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "teste.html"));

