import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UrlShortenerForm() {
    
  return (
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
  )
}
