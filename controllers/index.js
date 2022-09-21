const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes= require('./mainpage-routes.js')

router.use('/api', apiRoutes);
router.use('/', mainRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;