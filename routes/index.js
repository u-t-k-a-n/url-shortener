const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
 
})

router.post('/shortUrls', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Hello World' });   
})

module.exports = router;