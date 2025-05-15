const { Sequelize, DataTypes, Model } = require('../db/connection')
const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");


module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}