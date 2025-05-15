const { db, DataTypes } = require("./db/connection.js")
let Like;
Like = db.define("like", {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
})

module.exports = Like;