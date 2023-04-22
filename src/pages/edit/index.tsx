import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Input, Tile } from '@/components';

export const Edit: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form>
      <h3 className="mb-4">Konfigurowanie akwarium</h3>
      <Row>
        <Col>
          <Tile title="Parametry">
            <Container className="px-3">
              <Row>
                <Col>
                  <Form.Group controlId="aquariumName">
                    <Form.Label className="mt-2">
                      <h4>Nazwa akwarium</h4>
                    </Form.Label>
                    <Input placeholder="Nazwa" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="temperature">
                    <Form.Label className="mt-3">
                      <h4>Temperatura wody</h4>
                    </Form.Label>
                    <Input placeholder="Temperatura" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="targetPh">
                    <Form.Label className="mt-3">
                      <h4>Docelowe pH wody</h4>
                    </Form.Label>
                    <Input placeholder="pH wody" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Label className="mt-3">
                <h4>Przedział godzin włączonego światła</h4>
              </Form.Label>
              <Row>
                <Col>
                  <Form.Group controlId="lightStartTime">
                    <Input placeholder="Godzina od" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lightStopTime">
                    <Input placeholder="Godzina do" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="frequency">
                <Form.Label className="mt-3">
                  <h4>Częstotliwość wykonywanych pomiarów (min)</h4>
                </Form.Label>
                <Row>
                  <Col>
                    <Input placeholder="Częstotliwość (min)" />
                  </Col>
                  <Col></Col>
                </Row>
              </Form.Group>
            </Container>
          </Tile>
        </Col>
        <Col className="mb-4">
          <Tile title="Wymiary akwarium">
            <Container className="px-3">
              <Row>
                <Col>
                  <Form.Group controlId="width">
                    <Form.Label className="mt-3">
                      <h4>Szerokość (cm)</h4>
                    </Form.Label>
                    <Input placeholder="Szerokość (cm)" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="height">
                    <Form.Label className="mt-3">
                      <h4>Wysokość (cm)</h4>
                    </Form.Label>
                    <Input placeholder="Wysokość (cm)" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="length">
                <Form.Label className="mt-3">
                  <h4>Długość (cm)</h4>
                </Form.Label>
                <Row>
                  <Col>
                    <Input placeholder="Długość (cm)" />
                  </Col>
                  <Col></Col>
                </Row>
              </Form.Group>
            </Container>
          </Tile>
          <Card theme="primary">
            <>
              <h5 className="pt-3">Czy zatwierdzić zmiany?</h5>
              <div className="d-flex flex-column my-3 px-3 row-gap-3">
                <Button variant="success" type="submit">
                  Zatwierdź
                </Button>
                <div className="my-2"></div>
                <Button variant="danger">Anuluj</Button>
              </div>
            </>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};
