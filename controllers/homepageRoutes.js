const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/homepage',(req,res)=>{
    res.send('enter site here')
});

module.exports = router;