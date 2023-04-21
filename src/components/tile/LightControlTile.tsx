import { Col, Container, Row } from 'react-bootstrap';

import { Button } from '..';
import Tile from './Tile';

const LightControlTile = () => (
  <Tile theme="warning">
    <Container className="p-3">
      <Row className="h4 mb-4">Kontrola światła</Row>
      <Row>
        <Col>
          <Button variant="danger">Włącz</Button>
        </Col>
        <Col>
          <Button variant="success">Wyłącz</Button>
        </Col>
      </Row>
    </Container>
  </Tile>
);

export default LightControlTile;
