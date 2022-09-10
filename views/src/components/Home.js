import React, { useState } from 'react'
import UrlShortenerForm from './UrlShortenerForm'
import UrlTable from './UrlTable'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';


export default function Home() {
    const [shortUrl, setShortUrl] = useState(null);
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const fullUrl = e.target.fullUrl.value;
        const response = await axios.post("/shortUrls", { fullUrl });
        setShortUrl(response.data.shortUrl);
    }

    return (
        <div>
            {shortUrl && (
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton >
                        <strong className="mr-auto">Short URL</strong>
                    </Modal.Header>
                    <Modal.Body>
                        <a href={shortUrl}>{shortUrl}</a>
                    </Modal.Body>
                </Modal>
            )}
            <h1 style={{ color: "white"}}>URL Shortener</h1>
            <UrlShortenerForm handleSubmit={handleSubmit} />
            <UrlTable />
        </div>
    )
}
