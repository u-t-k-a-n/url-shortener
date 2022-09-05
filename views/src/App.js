import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <Form action="/shortUrls" method="POST" className="my-4">
        <Form.Group className="m-3">
          <Form.Label>URL</Form.Label>
          <Row>
            <Col>
              <Form.Control required className="mb-2" type="text" name="url" placeholder="Enter URL" />
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
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
