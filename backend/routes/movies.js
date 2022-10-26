const { Router } = require('express');
const router = Router();


const movies = require('../sample.json');


router.get('/api/movies', (req,res) =>{
    res.json(movies);
})

router.post('/api/movies', (req,res) =>{
    console.log(req.body);
    res.send('received');
})



module.exports = router;