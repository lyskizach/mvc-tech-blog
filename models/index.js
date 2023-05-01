const User = require('/User');
const BlogPost = require('/BlogPost');

User.hasMany(BlogPost, {
    foreignKey: ''
});

BlogPost.belongsTo(User, {
    foreignKey: ''
});

module.exports = { User, BlogPost };