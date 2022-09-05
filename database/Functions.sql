CREATE OR REPLACE FUNCTION Urls_insert(
    full_url TEXT,
    short_url TEXT) 
RETURNS VOID AS $$
BEGIN
    INSERT INTO Urls(fullUrl, shortUrl)
    VALUES(full_url, short_url);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Urls_count_increment(
    short_url TEXT)
RETURNS VOID AS $$
BEGIN
    UPDATE Urls
    SET count = count + 1
    WHERE shortUrl = short_url;
END;
$$ LANGUAGE plpgsql;