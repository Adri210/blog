const express = require('express');
const app = express();
const porta = 8080;
const bodyParser = require('body-parser');

//configurar EJS como mecanismo de visualização 

app.set('view engine', 'ejs');

app.set('views',__dirname + '/views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
