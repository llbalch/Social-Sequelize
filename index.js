const { Comment, Like, Post, Profile, User } = require("./models")

// Define your associations here

User.hasOne(Profile)
Profile.belongsTo(User)
User.hasMany(Post)
Post.belongsTo(User)
Post.hasMany(Comment)
Comment.belongsTo(Post)
User.belongsToMany(Like, {through: "userlike"})
Like.belongsToMany(User, {through: "userlike"})




module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}