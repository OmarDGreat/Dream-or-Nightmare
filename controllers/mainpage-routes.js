const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/',(req,res)=>{
    res.send('this works');
})

module.exports = router;