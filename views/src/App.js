import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    function getAllLinks() {
      fetch("http://localhost:5000/")
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
        });
      console.log(data);
    }
    getAllLinks();

    //  console.log(data);
  }, []);

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

      <table className="table">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Shortened URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://www.google.com">https://www.google.com</a></td>
            <td><a href="http://localhost:3000/1">http://localhost:3000/1</a></td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <p>
        {!data ? "Loading..." : data.map((item) => (
          <div key={item.id}>
{item.urls_get_all_links}
          </div>
        ))
      }
      </p>
    </div>
  );
}

export default App;
