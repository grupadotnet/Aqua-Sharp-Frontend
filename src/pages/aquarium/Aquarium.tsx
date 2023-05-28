import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { BarChart, DataCard, exampleData, LineChart, Tile } from '@/components';

type X = 'siema' | 'siemano';

type lightStatus = 'turned off' | 'turned on';
type thermophoreStatus = 'turned off' | 'turned on';

const Aquarium = () => {
  const { t } = useTranslation();

  const params = useParams();

  return (
    <div>
      <header className="fw-semibold text-capitalize mb-4 h3">{`${t(
        'aquarium'
      )} ${params.id}`}</header>
      <Row className="mb-4">
        <Col>
          <DataCard
            theme="primary"
            title={t('current temperature', { ns: 'aquarium' })}
            content={'siema' as X}
          />
        </Col>
        <Col>
          <DataCard
            theme="success"
            title={t('current ph', { ns: 'aquarium' })}
            content={'siema' as X}
          />
        </Col>
        <Col>
          <DataCard
            theme="info"
            title={t('light status', { ns: 'aquarium' })}
            content={'turned on' as lightStatus}
          />
        </Col>
        <Col>
          <DataCard
            theme="warning"
            title={t('thermophore status', { ns: 'aquarium' })}
            content={'turned off' as thermophoreStatus}
          />
        </Col>
      </Row>
      <Row>
        <Col className="w-50">
          <Tile header={t('temperature', { ns: 'aquarium' })}>
            <LineChart
              minY={20000}
              // maximum on y axis (optional - not giving maximum makes the highest value as maximum)
              maxY={100000}
              // data displayed on x axis, it has to be array of numbers/strings (required)
              dataX={exampleData.map((el) => el.year)}
              // data displayed on y axis, it has to be array of numbers/string (required)
              dataY={exampleData.map((el) => el.userGain)}
            />
          </Tile>
        </Col>
        <Col className="w-50">
          <Tile header={t('water ph', { ns: 'aquarium' })}>
            <BarChart
              minY={20000}
              // maximum on y axis (optional - not giving maximum makes the highest value as maximum)
              maxY={100000}
              // data displayed on x axis, it has to be array of numbers/strings (required)
              dataX={exampleData.map((el) => el.year)}
              // data displayed on y axis, it has to be array of numbers/string (required)
              dataY={exampleData.map((el) => el.userGain)}
            />
          </Tile>
        </Col>
      </Row>
    </div>
  );
};

export default Aquarium;
