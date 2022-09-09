import React, { useEffect, useState } from 'react'

const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

export default function HandleRedirect() {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        function getLink() {
            fetch(`${SERVER_URL}` + window.location.pathname)
                .then((res) => res.json())
                .then((data) => {
                    setData(data.fullUrl);
                })
                .catch((err) => {
                    setError(err);
                });
        }
        getLink();
    }, []);

    useEffect(() => {
        if (data) {
            window.location.replace(data);
        }
    }, [data]);

    return (
        <div>
        {(!data && !error) ? <h1>Loading...</h1> : <h1>404 Not Found</h1>}
        </div>
  )
}
