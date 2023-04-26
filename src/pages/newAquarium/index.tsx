import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Input, Tile } from '@/components';

export const NewAquariumView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form>
      <h3 className="mb-4">{t('aquarium_setup')}</h3>
      <Row>
        <Col md>
          <Tile title={t('parameters')}>
            <Container className="px-3">
              <Row>
                <Col>
                  <Form.Group controlId="aquariumName">
                    <Form.Label className="mt-2">
                      <h4>{t('aquarium_name')}</h4>
                    </Form.Label>
                    <Input placeholder={t('name')} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="temperature">
                    <Form.Label className="mt-3">
                      <h4>{t('water_temperature')}</h4>
                    </Form.Label>
                    <Input placeholder={t('temperature')} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="targetPh">
                    <Form.Label className="mt-3">
                      <h4>{t('target_water_ph')}</h4>
                    </Form.Label>
                    <Input placeholder={t('water_ph')} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Label className="mt-3">
                <h4>{t('lights_on_time_interval')}</h4>
              </Form.Label>
              <Row>
                <Col>
                  <Form.Group controlId="lightStartTime">
                    <Input placeholder={t('hour_from')} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lightStopTime">
                    <Input placeholder={t('hour_to')} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="frequency">
                <Form.Label className="mt-3">
                  <h4>{t('measurements_frequency')}</h4>
                </Form.Label>
                <Row>
                  <Col sm>
                    <Input placeholder={t('frequency')} />
                  </Col>
                  <Col sm></Col>
                </Row>
              </Form.Group>
            </Container>
          </Tile>
        </Col>
        <Col md className="mb-4">
          <Tile title={t('aquarium_dimensions')}>
            <Container className="px-3">
              <Row>
                <Col>
                  <Form.Group controlId="width">
                    <Form.Label className="mt-3">
                      <h4>{t('width')}</h4>
                    </Form.Label>
                    <Input placeholder={t('width')} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="height">
                    <Form.Label className="mt-3">
                      <h4>{t('height')}</h4>
                    </Form.Label>
                    <Input placeholder={t('height')} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="length">
                <Form.Label className="mt-3">
                  <h4>{t('length')}</h4>
                </Form.Label>
                <Row>
                  <Col sm>
                    <Input placeholder={t('length')} />
                  </Col>
                  <Col sm></Col>
                </Row>
              </Form.Group>
            </Container>
          </Tile>
          <Card theme="primary">
            <>
              <h5 className="pt-3">{t('changes_prompt')}</h5>
              <div className="d-flex flex-column my-3 px-3 row-gap-3">
                <Button variant="success" type="submit">
                  {t('apply')}
                </Button>
                <div className="my-2"></div>
                <Button variant="danger">{t('cancel')}</Button>
              </div>
            </>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};
