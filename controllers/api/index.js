const router = require('express').Router();

const UserRoutes = require('./UserRoutes.js');
const BlogpostRoutess = require('./BlogpostRoutes.js');
const CommentRoutes = require('./CommentRoutes.js');

router.use('/users', UserRoutes);
router.use('/blogpost', BlogpostRoutess);
router.use('/comments', CommentRoutes);

module.exports = router;x