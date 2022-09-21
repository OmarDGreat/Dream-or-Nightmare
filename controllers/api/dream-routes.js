const router = require("express").Router();
const Dream = require('../../models');

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

// m's updates below
router.get('/my-dreams',(req,res) => {
    res.render('my-dreams')
  })

module.exports = router;