const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

<<<<<<< HEAD
router.use((req, res) => {
  res.status(404).end();
});

const User = require("../models/userSchema");


=======
>>>>>>> testing-branch

module.exports = router;
