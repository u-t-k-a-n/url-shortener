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

CREATE OR REPLACE FUNCTION Urls_get_full_url(
    short_url TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN (SELECT fullUrl FROM Urls WHERE shortUrl = short_url);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION Urls_get_all_links()
RETURNS TABLE(full_Url TEXT, short_Url TEXT, click_count INTEGER) AS $$
BEGIN
    RETURN QUERY SELECT fullUrl, shortUrl, count FROM Urls;
END;
$$ LANGUAGE plpgsql;