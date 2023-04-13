//Importação do express.js
const express = require("express");

// Tratativa das rotas com Express - Router
const router = express.Router()

// Criar a rota raiz "/"
router.get ('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});
router.get ('/contatos', (req, res) =>{
    res.sendFile(__dirname + "/contato.html");
});
router.get ('/produtos', (req, res) =>{
    res.sendFile(__dirname + "/produto.html");
});
router.get ('/catalogos', (req, res) =>{
    res.sendFile(__dirname + "/catalogo.html");
});

//Invocando o uso do app com "/"
const app = express();
app.use(express.static(__dirname + '/imagens'))
app.use(express.static(__dirname + '/styles'))
app.use ('/', router);


module.exports = app;