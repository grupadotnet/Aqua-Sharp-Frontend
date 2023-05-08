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

export const NewAquariumView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Form>
      <Title title={t('aquarium_setup')} />
      <Row>
        <Col className="py-4" md>
          <Tile header={t('parameters')}>
            <SingleInputGroup
              controlId="aquariumName"
              label={t('aquarium_name')}
              placeholder={t('name')}
            />
            <Col className="gap-4 d-flex p-0">
              <SingleInputGroup
                controlId="temperature"
                label={t('water_temperature')}
                placeholder={t('temperature')}
              />
              <SingleInputGroup
                controlId="targetPh"
                label={t('target_water_ph')}
                placeholder={t('water_ph')}
              />
            </Col>
            <DoubleInputGroup
              label={t('lights_on_time_interval')}
              controlId="lightWorkingHours"
              placeholderLeft={t('hour_from')}
              placeholderRight={t('hour_to')}
            />

            <DoubleInputGroup
              label={t('measurements_frequency')}
              controlId="frequency"
              placeholderLeft={t('frequency')}
            />
          </Tile>
        </Col>
        <Col md className="mb-4">
          <Tile header={t('aquarium_dimensions')}>
            <Col className="gap-4 d-flex p-0">
              <SingleInputGroup
                controlId="width"
                label={t('width')}
                placeholder={t('width')}
              />
              <SingleInputGroup
                controlId="height"
                label={t('height')}
                placeholder={t('height')}
              />
            </Col>
            <DoubleInputGroup
              controlId="length"
              label={t('length')}
              placeholderLeft={t('length')}
            />
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
