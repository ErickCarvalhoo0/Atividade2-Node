// Importando o app do arquivo app.js
const app = require('./app')

// Configurando o servidor:
app.set('port', 3000);
const server = app.listen(app.get('port'), () =>{
    console.log("Servidor Rodando na porta: " + server.address ().port);
}); 


