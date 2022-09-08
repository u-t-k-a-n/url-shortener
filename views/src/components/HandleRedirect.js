import React, { useEffect, useState } from 'react'

export default function HandleRedirect() {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        function getLink() {
            fetch("http://localhost:5000" + window.location.pathname)
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
