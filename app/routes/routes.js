module.exports =  function (app) {
  app.get('/', function (req, res) {
    var mysql = require('mysql');
    //Conexão
    var connection = mysql.createConnection({
      host:  'localhost',
      user:  'root',
      password: 'root',
      database: 'teste_nodejs'
    });

    //Consulta - I/O
    //Essa function dentro de connection.query é uma função de callback, ela sempre é chamada quando a primeira função é
    //terminada
    connection.query('select * from livros', function (err, results) {
      res.render('products/list', {lista:results});
    });

    //Encerra a conexão
    connection.end();

  });

};