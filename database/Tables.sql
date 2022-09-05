CREATE TABLE IF NOT EXISTS Urls(
    id SERIAL PRIMARY KEY,
    fullUrl TEXT NOT NULL,
    shortUrl TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0
);