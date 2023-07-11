const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: 'Life is Hard',
    content: 'This is my first blogpost. I hate how difficult life can be! HELP ME.',
    creator_id: 1,
  },
  {
    title: 'MVC is a Nightmare',
    content: 'This is a blogpost about MVC. Dealing with MVC is so frustrating!!!',
    creator_id: 2,
  },
  {
    title: 'Tech Woes',
    content: 'Technology always seems to give me trouble!',
    creator_id: 1
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;