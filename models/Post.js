const { db, DataTypes } = require("./db/connection.js")
let Post;
Post = db.define("post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})


module.exports = Post;