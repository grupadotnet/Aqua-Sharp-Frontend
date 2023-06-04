import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Card,
  DoubleInputGroup,
  SingleInputGroup,
  Tile,
  Title,
} from '@/components';

import './NewAquarium.scss';

const NewAquarium = () => {
  const { t } = useTranslation();
  return (
    <Form>
      <Title title={t('aquarium setup', { ns: 'aquarium' })} />
      <Row>
        <Col>
          <Tile header={t('parameters', { ns: 'aquarium' })}>
            <SingleInputGroup
              controlId="aquariumName"
              label={t('aquarium name', { ns: 'aquarium' })}
              placeholder={t('name')}
            />
            <Col className="gap-4 d-flex p-0">
              <SingleInputGroup
                controlId="temperature"
                label={t('water temperature', { ns: 'aquarium' })}
                placeholder={t('temperature', { ns: 'aquarium' })}
              />
              <SingleInputGroup
                controlId="targetPh"
                label={t('target water ph', { ns: 'aquarium' })}
                placeholder={t('water ph', { ns: 'aquarium' })}
              />
            </Col>
            <DoubleInputGroup
              label={t('lights on time interval', { ns: 'aquarium' })}
              controlId="lightWorkingHours"
              placeholderLeft={t('hour from', { ns: 'aquarium' })}
              placeholderRight={t('hour to', { ns: 'aquarium' })}
            />

            <DoubleInputGroup
              label={t('measurements frequency', { ns: 'aquarium' })}
              controlId="frequency"
              placeholderLeft={t('frequency', { ns: 'aquarium' })}
            />
          </Tile>
        </Col>
        <Col>
          <Tile header={t('aquarium dimensions', { ns: 'aquarium' })}>
            <Col className="gap-4 d-flex p-0">
              <SingleInputGroup
                controlId="width"
                label={t('width', { ns: 'aquarium' })}
                placeholder={t('width', { ns: 'aquarium' })}
              />
              <SingleInputGroup
                controlId="height"
                label={t('height', { ns: 'aquarium' })}
                placeholder={t('height', { ns: 'aquarium' })}
              />
            </Col>
            <DoubleInputGroup
              controlId="length"
              label={t('length', { ns: 'aquarium' })}
              placeholderLeft={t('length', { ns: 'aquarium' })}
            />
          </Tile>
          <Card theme="primary">
            <>
              <h6 className="pt-2">
                {t('changes prompt', { ns: 'configuration' })}
              </h6>
              <div className="d-flex flex-column my-3 px-3 row-gap-3">
                <Button variant="success" type="submit">
                  {t('apply', { ns: 'configuration' })}
                </Button>
                <div className="my-2"></div>
                <Button variant="danger">
                  {t('cancel', { ns: 'configuration' })}
                </Button>
              </div>
            </>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default NewAquarium;
