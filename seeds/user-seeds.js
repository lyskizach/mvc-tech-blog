const { User } = require('../models');

const userData = [
    {
        name: 'Zach',
        email: 'lyski.zach@icloud.com',
        password: 'password12345',
    },
    {
        name: 'Jackson',
        email: 'jackson.rose@icloud.com',
        password: 'password12345',
    },
];

const userSeed = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = userSeed;