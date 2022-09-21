const router = require("express").Router();
const apiRoutes = require('./api');
const mainRoutes= require('./dashboard-routes.js')


router.use('/api', apiRoutes);
router.use('/', mainRoutes);

router.use((req, res) => {
  res.status(404).end();
});

const User = require("../models/userSchema");



module.exports = router;
