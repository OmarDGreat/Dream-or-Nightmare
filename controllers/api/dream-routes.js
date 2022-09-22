const router = require("express").Router();
const Dream = require('../../models');

router.get('/dream_story', (req,res)=>{
    Dream.fineOne({
        where:{
            id: placeholder// i want to randomly pull a dream from an array, and then use that to populate the handlebars.
        },
        attributes:[
            'id',
            'title',
            'dream_story',
            'upvote',
            'downvote'
        ]
    }).then(singleDreamStory=>{
        const dreams = singleDreamStory.get({ plain:true });
        res.render('post-dream.handlebars', dreams)
    })

})

router.post('/dream_story',(req,res)=>{
    Dream.create({
        title: req.body.title,
        dream_story: req.body.dream_story,
        //user_id: req.session.user_id
    })
    .then(dreamData=> res.json(dreamData))
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;