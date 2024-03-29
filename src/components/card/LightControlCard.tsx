import { Col, Container, Row } from 'react-bootstrap';

import { Button } from '..';
import Card from './Card';

const LightControlCard = () => (
  <Card theme="warning">
    <Container className="p-3">
      <Row className="h3 mb-4">
        <Col className="mr-5">Kontrola światła</Col>
        <Col xs={6} className="mr-5"></Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column">
          <Button variant="danger">Włącz</Button>
        </Col>
        <Col className="d-flex flex-column">
          <Button variant="success">Wyłącz</Button>
        </Col>
      </Row>
    </Container>
  </Card>
);

export default LightControlCard;
