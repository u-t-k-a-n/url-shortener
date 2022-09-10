import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

export default function UrlTable() {
  const [data, setData] = useState();

  useEffect(() => {
    function getAllLinks() {
      fetch("/all_links")
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
        });
    }
    getAllLinks();
  }, []);

  function betterString(str) {
    str = str.toString().substring(1, str.length - 1);
    return str;
  }

  function splitString(str) {
    str = str.split(',');
    return str;
  }

  function attendLink(str) {
    str = betterString(str);
    str = splitString(str);
    const originalLink = str[0];
    const shortLink = str[1];
    const count = str[2];
    return { originalLink, shortLink, count };
  }
  return (
    <Table className="" variant="dark" responsive striped size="sm">
      <thead>
        <tr>
          <th >Original URL</th>
          <th >Shortened URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(link => {
          const { originalLink, shortLink, count } = attendLink(link.urls_get_all_links);
          return (
            <tr key={shortLink}>
              <td style={{ overflow: "hidden", maxWidth: "75ch" }}><a href={originalLink}>{originalLink}</a></td>
              <td>
                <a href={shortLink}>{shortLink}</a>
              </td>
              <td>{count}</td>
            </tr>
          )
        }
        )}
      </tbody>
    </Table>
  )
}
