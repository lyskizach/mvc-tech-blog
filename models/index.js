const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(BlogPost, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
    foreignKey: 'creator_id'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'creator_id'
});

module.exports = { BlogPost, Comment, User };