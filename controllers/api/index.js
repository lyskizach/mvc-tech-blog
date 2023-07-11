const router = require('express').Router();

const userRoutes = require('./UserRoutes');
const blogpostRoutes = require('./BlogpostRoutes');
const CommentRoutes = require('./CommentRoutes');

router.use('/users', userRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/comments', CommentRoutes);

module.exports = router;