const router = require('express').Router();
const HomeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/', HomeRoutes);
router.use('/api', apiRoutes);

module.exports = router;