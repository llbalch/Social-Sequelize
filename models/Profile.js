const { db, DataTypes } = require("../db/connection")
let Profile;
Profile = db.define("profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
})

module.exports = Profile;