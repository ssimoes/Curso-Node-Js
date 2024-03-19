const mongoose = require('mongoose');

const connectToDatabase = async () =>{
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORDS}@cursonodejs.wq71z1v.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJs`, 
    (error)=>{
        if(error){
            return console.log("Ocorreu um Erro ao conectar-se com o banco de dados!");
        }

        return console.log("Conn Database success!!!")

    })
}

module.exports = connectToDatabase
