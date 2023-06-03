import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { BarChart, DataCard, exampleData, LineChart, Tile } from '@/components';

const Aquarium = () => {
  const { t } = useTranslation();

  const params = useParams();

  return (
    <div>
      <header className="fw-semibold text-capitalize mb-4 h3">{`${
        (t('aquarium'), { ns: 'aquarium' })
      } ${params.id}`}</header>
      <Row className="mb-4">
        <Col>
          <DataCard
            theme="primary"
            title={t('current temperature', { ns: 'aquarium' })}
            content="siema"
          />
        </Col>
        <Col>
          <DataCard
            theme="success"
            title={t('current ph', { ns: 'aquarium' })}
            content="siema"
          />
        </Col>
        <Col>
          <DataCard
            theme="info"
            title={t('light status', { ns: 'aquarium' })}
            content="turned on"
          />
        </Col>
      </Row>
      <Row>
        <Col className="w-50">
          <Tile header={t('temperature', { ns: 'aquarium' })}>
            <LineChart
              minY={20000}
              maxY={100000}
              dataX={exampleData.map((el) => el.year)}
              dataY={exampleData.map((el) => el.userGain)}
            />
          </Tile>
        </Col>
        <Col className="w-50">
          <Tile header={t('water ph', { ns: 'aquarium' })}>
            <BarChart
              minY={20000}
              maxY={100000}
              dataX={exampleData.map((el) => el.year)}
              dataY={exampleData.map((el) => el.userGain)}
            />
          </Tile>
        </Col>
      </Row>
    </div>
  );
};

export default Aquarium;
