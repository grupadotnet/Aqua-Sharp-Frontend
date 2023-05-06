import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Input, InputGroup, Tile, Title } from '@/components';

const NewAquariumView = () => {
  const { t } = useTranslation();
  return (
    <Form>
      <Title title={t('aquarium setup', { ns: 'aquarium' })} />
      <Row>
        <Col md>
          <Tile title={t('parameters', { ns: 'aquarium' })}>
            <Container className="px-3">
              <Row>
                <Col>
                  <InputGroup
                    controlId="aquariumName"
                    label={t('aquarium name', { ns: 'aquarium' })}
                  >
                    <Input placeholder={t('name')} />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup
                    controlId="temperature"
                    label={t('water temperature', { ns: 'aquarium' })}
                  >
                    <Input placeholder={t('temperature', { ns: 'aquarium' })} />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup
                    controlId="targetPh"
                    label={t('target water ph', { ns: 'aquarium' })}
                  >
                    <Input placeholder={t('water ph', { ns: 'aquarium' })} />
                  </InputGroup>
                </Col>
              </Row>
              <Form.Label className="mt-3">
                <h4>{t('lights on time interval', { ns: 'aquarium' })}</h4>
              </Form.Label>
              <Row>
                <Col>
                  <Form.Group controlId="lightStartTime">
                    <Input placeholder={t('hour from', { ns: 'aquarium' })} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lightStopTime">
                    <Input placeholder={t('hour to', { ns: 'aquarium' })} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="frequency">
                <Form.Label className="mt-3">
                  <h4>{t('measurements frequency', { ns: 'aquarium' })}</h4>
                </Form.Label>
                <Row>
                  <Col sm>
                    <Input placeholder={t('frequency', { ns: 'aquarium' })} />
                  </Col>
                  <Col sm></Col>
                </Row>
              </Form.Group>
            </Container>
          </Tile>
        </Col>
        <Col md className="mb-4">
          <Tile title={t('aquarium dimensions', { ns: 'aquarium' })}>
            <Container className="px-3">
              <Row>
                <Col>
                  <InputGroup
                    controlId="width"
                    label={t('width', { ns: 'aquarium' })}
                  >
                    <Input placeholder={t('width', { ns: 'aquarium' })} />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup
                    controlId="height"
                    label={t('height', { ns: 'aquarium' })}
                  >
                    <Input placeholder={t('height', { ns: 'aquarium' })} />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup
                    controlId="length"
                    label={t('length', { ns: 'aquarium' })}
                  >
                    <Input placeholder={t('length', { ns: 'aquarium' })} />
                  </InputGroup>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Tile>
          <Card theme="primary">
            <>
              <h5 className="pt-3">
                {t('changes prompt', { ns: 'aquarium' })}
              </h5>
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

export default NewAquariumView;
