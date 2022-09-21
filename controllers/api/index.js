const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const dreamRoutes = require('./dream-routes.js');


router.use('/users', userRoutes);
router.use('/dreams', dreamRoutes);

module.exports = router;