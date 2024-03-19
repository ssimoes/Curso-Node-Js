const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

//middlewares
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
})


app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({});

    res.render('index', { users });
})

app.get('/home', (req, res) =>{
    //res.contentType('application/html');
    res.status(200).send("<h1>hello World111</h1>");
})

//Pega os dados de um usuário especifico
app.get('/users/:id', async (req, res) =>{
    try {

      const id = req.params.id;

      const users = await UserModel.findById(id);
 
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
    
 })

 //Atualiza os dados de um usuário
app.patch('/users/:id', async (req, res) =>{
    try {

      const id = req.params.id;

      const users = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
 
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
    
 })

 //Deleta os dados de um usuário
 app.delete('/users/:id', async (req, res) =>{
    try {

      const id = req.params.id;

      const users = await UserModel.findByIdAndRemove(id);
 
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
    
 })




//Pega todos os usuários do banco.
app.get('/users', async (req, res) =>{
   try {
     const users = await UserModel.find({});

     res.status(200).json(users);
   } catch (error) {
     res.status(500).send(error.message);
   }
   
})

app.post('/users', async (req, res) =>{
   try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);

   } catch (error) {
    res.status(500).send(error.message);
   }
})


const port = 8080 ;

app.listen(port, () => console.log(`Rodando Com express na : ${port}`));