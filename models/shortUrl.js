const pool = require("../database/db.config");
const shortId = require('shortid');

async function saveShortUrl(longUrl) {
    const shortUrl = shortId.generate();
    try {
        const results = await pool.query("SELECT Urls_insert($1, $2)", [longUrl, shortUrl]);
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

 module.exports = {saveShortUrl, getAllLinks};

