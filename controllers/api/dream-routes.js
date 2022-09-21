const router = require("express").Router();
const Dream = require('../../models');

// router.get('/dream_story', (req,res)=>{
    
// })

router.post('/dream_story',(req,res)=>{
    Dream.create({
        title: req.body.title,
        dream_story: req.body.dream_story,
        user_id: req.session.user_id
    })
    .then(dreamData=> res.json(dreamData))
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;