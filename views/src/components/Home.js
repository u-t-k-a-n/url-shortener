import React from 'react'
import UrlShortenerForm from './UrlShortenerForm'
import UrlTable from './UrlTable'

export default function Home() {
    return (
        <div>
            <h1>URL Shortener</h1>
            <UrlShortenerForm />
            <UrlTable />
        </div>
    )
}
