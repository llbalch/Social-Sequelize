const { db, DataTypes } = require("../db/connection")
let Comment;
Comment = db.define("comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})

module.exports = Comment;