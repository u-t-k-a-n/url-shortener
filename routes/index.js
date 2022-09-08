const express = require('express');
const router = express.Router();
const { saveShortUrl, getAllLinks, getOriginalUrl, incrementCount } = require('../models/shortUrl.js');

router.get('/', async (req, res) => {
    const results = await getAllLinks();
    res.json({ results });
})

router.post('/shortUrls',  async (req, res) => {
    const fullUrl = req.body.fullUrl;
    await saveShortUrl(fullUrl);
    res.redirect("http://localhost:3000");
})

router.get('/:shortUrl', async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const fullUrl = await getOriginalUrl(shortUrl);
    if (fullUrl[0].urls_get_full_url == null) return res.sendStatus(404);
    await incrementCount(shortUrl);
    res.json({ fullUrl: fullUrl[0].urls_get_full_url });
})

module.exports = router;