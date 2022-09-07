const express = require('express');
const router = express.Router();
const { saveShortUrl, getAllLinks } = require('../models/shortUrl.js');


router.get('/', async (req, res) => {
    const results = await getAllLinks();
    res.json({ results });
 //   console.log(results);
})

router.post('/shortUrls',  async (req, res) => {
    const fullUrl = req.body.fullUrl;
    await saveShortUrl(fullUrl);
    res.redirect("http://localhost:3000");
})

module.exports = router;