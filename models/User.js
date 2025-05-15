
const { db, DataTypes } = require("./db/connection.js")
let User;
User = db.define("user", {
    username: DataTypes.STRING,
    email: DataTypes.STRING
})


module.exports = User;