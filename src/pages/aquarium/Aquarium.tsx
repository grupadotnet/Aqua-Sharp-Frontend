import React from "react";
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { Button } from '@/components';

function Aquarium() {
  return (
<div className="container-fluid">
  <h2 className="mb-4">Aquarium Details</h2>
  <p className="mb-4">Bardziej szczegółowe informacje niż na stronie głównej.</p>

    <Row className="my-3 px-0">
      <Col className="my-3 px-0 mr-3">
        <Link to={`/aquarium/:id/edit`}>
          <Button variant="primary">Edit aquarium</Button>
        </Link>
      </Col>
      <Col className="my-3 px-0">
        <Link to={`/aquarium/:id/measurements`}>
          <Button variant="success">Measure history</Button>
        </Link>
      </Col>
    </Row>
    <Row className="px-0">
      <Col className="px-0">
        <a href="path/to/config/file" download>
          <Button variant="secondary">Download configuration file</Button>
        </a>
      </Col>
    </Row>

  </div>

  );
}

export default Aquarium;