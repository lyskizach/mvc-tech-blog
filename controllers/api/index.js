const router = require('express').Router();
const blogPostRoutes = require('/blogpots-routes');
const userRoutes = require('/user-routes');

router.use('user', userRoutes);
router.use('/blogpost', blogPostRoutes);

module.exports - router;