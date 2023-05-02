const router = require('express').Router();
const blogpostRoutes = require('./BlogpostRoutes');
const userRoutes = require('./UserRoutes');

router.use('/user', userRoutes);
router.use('/blogpost', blogpostRoutes);

module.exports = router;