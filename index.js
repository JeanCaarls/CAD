const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
app.use(express.static("../public"))


//Config
//Template Engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars')
// Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
    app.get("/", function(req, res) {
        res.render('layouts/body')
    })

app.listen(8081, function () {
    console.log("Servidor iniciado na porta 8081!!!")
})