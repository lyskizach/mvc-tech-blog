const router = require('express').Router();
const homeRoutes = require('./HomeRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;