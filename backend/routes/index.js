const { Router } = require('express');

const router = Router();


//routes
router.get('/', (req, res)=>{
    res.json({"Title": "Hello word"});
});

router.get('/test', (req, res)=>{
    const data = {
        "name": "Americo",
        "surname": "Chiclana"
    }
    res.json({data});
});
module.exports = router;