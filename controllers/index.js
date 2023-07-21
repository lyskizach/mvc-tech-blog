const router = require('express').Router();
const HomeRoutes = require('./HomeRoutes'); // Corrected relative path
const apiRoutes = require('./api');

router.use('/', HomeRoutes);
router.use('/api', apiRoutes);

module.exports = router;