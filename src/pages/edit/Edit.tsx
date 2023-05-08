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

import './Edit.scss';

const Edit = () => {
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
            <Col className="d-flex gap-4 p-0">
              <SingleInputGroup
                controlId="temperature"
                label={t('water temperature', { ns: 'aquarium' })}
                placeholder={t('temperature')}
              />
              <SingleInputGroup
                placeholder={t('water ph', { ns: 'aquarium' })}
                controlId="targetPh"
                label={t('target water ph', { ns: 'aquarium' })}
              />
            </Col>
            <DoubleInputGroup
              label={t('lights on time interval', { ns: 'aquarium' })}
              controlId="lightTime"
              placeholderLeft={t('hour from', { ns: 'aquarium' })}
              placeholderRight={t('hour to', { ns: 'aquarium' })}
            />
            <DoubleInputGroup
              controlId="frequency"
              label={t('measurements frequency', { ns: 'aquarium' })}
              placeholderLeft={t('frequency', { ns: 'aquarium' })}
            />
          </Tile>
        </Col>
        <Col>
          <Card theme="primary">
            <>
              <h5 className="pt-3">
                {t('changes prompt', { ns: 'configuration' })}
              </h5>
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

export default Edit;
