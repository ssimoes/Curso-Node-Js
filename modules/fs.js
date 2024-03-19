const { error } = require('console');
const fs = require('fs');

const path = require('path');

//Criar uma pasta

/*
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if (error) {
       return console.log('Erro: ', error);
    }

    console.log("Pasta Criada Com Sucesso!");

})
*/


//Criar um arquivo
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'Hello node!', (error) =>{
    if (error) {
        return console.log('Erro: ', error);
     }
 
     console.log("Arquivo Criado Com Sucesso!");

     //Append no arquivo
    fs.appendFile(path.join(__dirname, "/teste", 'teste.txt'), 'Hello Word', (error) =>{
        if (error) {
            return console.log('Erro: ', error);
         }
 
        console.log("Append executado com sucesso!");
    })  

    //Ler dados de um arquivo.
    fs.readFile(path.join(__dirname, 'teste', 'teste.txt'), 'utf-8', (error, data)=>{
        if (error) {
          return console.log('Erro: ', error);
        }
 
         console.log("O que foi lido do Arquivo.: "+data);
    })   
     
     
})




