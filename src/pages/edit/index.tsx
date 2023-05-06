import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Input, InputGroup, Tile, Title } from '@/components';

export const Edit: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form>
      <Title title={t('aquarium_setup')} />
      <Row>
        <Col md>
          <Tile title={t('parameters')}>
            <Container className="px-3">
              <Row>
                <Col>
                  <InputGroup
                    controlId="aquariumName"
                    label={t('aquarium_name')}
                  >
                    <Input placeholder={t('name')} />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup
                    controlId="temperature"
                    label={t('water_temperature')}
                  >
                    <Input placeholder={t('temperature')} />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup controlId="targetPh" label={t('target_water_ph')}>
                    <Input placeholder={t('water_ph')} />
                  </InputGroup>
                </Col>
              </Row>
              <Form.Label className="mt-4 mb-0">
                <h5>{t('lights_on_time_interval')}</h5>
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
                <Form.Label className="mt-4 mb-0">
                  <h5>{t('measurements_frequency')}</h5>
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
