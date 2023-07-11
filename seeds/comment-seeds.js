const { Comment } = require('../models');

const commentData = [
  {
    content: 'This is a terrible comment.',
    post_id: 1,
    creator_id: 1,
  },
  {
    content: 'Awful BlogPost!',
    post_id: 2,
    creator_id: 2,
  },
  {
    content: 'I disagree!',
    post_id: 1,
    creator_id: 2,
  },
  {
    content: 'Some really dull thoughts here.',
    post_id: 2,
    creator_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;