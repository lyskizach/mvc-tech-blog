const router = require('express').Router();

const userRoutes = require('./UserRoutes.js');
const blogpostRoutes = require('./BlogpostRoutes.js');
const CommentRoutes = require('./CommentRoutes.js');

router.use('/users', userRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/comments', CommentRoutes);

module.exports = router;