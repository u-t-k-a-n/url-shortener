import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';

function App() {
  const [data, setData] = useState();
  const [tableData, setTableData] = useState();

  useEffect(() => {
    function getAllLinks() {
      fetch("http://localhost:5000/")
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

    <div className="container">
      <h1>URL Shortener</h1>
      <Form action="http://localhost:5000/shortUrls" method="POST" className="my-4">
        <Form.Group className="m-3">
          <Form.Label>URL</Form.Label>
          <Row>
            <Col>
              <Form.Control required className="mb-2" type="url" id='fullUrl' name="fullUrl" placeholder="Enter URL" />
            </Col>
            <Col>
              <Button variant="success" type="submit">Shrink</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>

      <Table className="" variant="dark" responsive striped size="sm">
        <thead>
          <tr>
            <th >Original URL</th>
            <th >Shortened URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          { data && data.map(link => {
            const { originalLink, shortLink, count } = attendLink(link.urls_get_all_links);
            return (
              <tr key={link._id}>
                <td style={{ overflow: "hidden", maxWidth: "75ch" }}><a href={originalLink}>{originalLink}</a></td>
                <td><a href={shortLink}>{shortLink}</a></td>
                <td>{count}</td>
              </tr>
            )
          }
          )} 
        </tbody>
      </Table>
    </div >
  );
}

export default App;
