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
          <Tile header={t('parameters')}>
            <SingleInputGroup
              controlId="aquariumName"
              label={t('aquarium_name')}
              placeholder={t('name')}
            />
            <Col className="d-flex gap-4 p-0">
              <SingleInputGroup
                controlId="temperature"
                label={t('water_temperature')}
                placeholder={t('temperature')}
              />
              <SingleInputGroup
                placeholder={t('water_ph')}
                controlId="targetPh"
                label={t('target_water_ph')}
              />
            </Col>
            <DoubleInputGroup
              label={t('lights_on_time_interval')}
              controlId="lightTime"
              placeholderLeft={t('hour_from')}
              placeholderRight={t('hour_to')}
            />
            <DoubleInputGroup
              controlId="frequency"
              label={t('measurements_frequency')}
              placeholderLeft={t('frequency')}
            />
          </Tile>
        </Col>
        <Col>
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

export default Edit;
