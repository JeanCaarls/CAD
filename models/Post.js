const db = require("./db");

const Post = db.sequelize.define("usuarios", {
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.TEXT
    },
    Data_de_nascimento: {
        type: db.Sequelize.DataTypes.DATEONLY
    }
})

//Post.sync({force: true})

module.exports = Post;