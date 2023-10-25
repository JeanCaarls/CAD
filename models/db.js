const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "@JJee112233", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}