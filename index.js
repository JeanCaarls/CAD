const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Post = require("./models/Post")

app.use(express.static("FrontEnd"))

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Rotas
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/FrontEnd/body.html")
});

app.get("/sucesso", function (req, res) {
    res.sendFile(__dirname + "/FrontEnd/sucesso_post.html")
})

app.post("/cad", function (req, res) {
    Post.create({
        nome: req.body.nameUser,
        sobrenome: req.body.subName,
        email: req.body.mail,
        Data_de_nascimento: req.body.nasc
        
    }).then(function () {
        res.redirect("/sucesso")
    }).catch(function (erro) {
        res.send("ERRO " + erro)
    })
})

app.listen(8081, function () {
    console.log("Servidor iniciado na porta 8081!!!")
});