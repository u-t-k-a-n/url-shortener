const pool = require("../database/db.config");
const shortId = require('shortid');

async function saveShortUrl(longUrl) {
    const shortUrl = shortId.generate();
    try {
        const results = await pool.query("SELECT Urls_insert($1, $2)", [longUrl, shortUrl]);
        return shortUrl;
    }
    catch (err) {
        console.log(err);
    }   
}

async function getAllLinks() {
    try {
        const results = await pool.query("SELECT Urls_get_all_links()");
        return results.rows;
    }
    catch (err) {
        console.log(err);
    }
}

async function getOriginalUrl(shortUrl) {
    try {
        const results = await pool.query("SELECT Urls_get_full_url($1)", [shortUrl]);
        return results.rows;
    }
    catch (err) {
        console.log(err);
    }
}

async function incrementCount(shortUrl) {
    try {
        const results = await pool.query("SELECT Urls_count_increment($1)", [shortUrl]);
    }
    catch (err) {
        console.log(err);
    }
}

 module.exports = {saveShortUrl, getAllLinks, getOriginalUrl, incrementCount};

