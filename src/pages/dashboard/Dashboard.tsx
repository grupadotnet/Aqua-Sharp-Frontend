import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { DataCard, OptionsTile } from '@/components';

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <OptionsTile
        tileHeader="Akwarium 1"
        header={t('options', { ns: 'common' })}
        items={[
          { label: t('details', { ns: 'common' }), value: 'aquarium/1' },
          {
            label: t('configure', { ns: 'common' }),
            value: 'aquarium/123/edit',
          },
        ]}
        onClick={(code: string) => {
          navigate(`/${code}`, { replace: true });
        }}
      >
        <Row lg={3} md={2} sm={2} className="justify-content-md-center m-3">
          <Col sm>
            <DataCard
              theme="primary"
              title={t('temperature', { ns: 'aquarium' })}
              withoutShadow
              content="dsdas"
            />
          </Col>
          <Col sm>
            <DataCard
              theme="info"
              title={t('water ph', { ns: 'aquarium' })}
              withoutShadow
              content="dsdas"
            />
          </Col>
          <Col sm>
            <DataCard
              theme="success"
              title={t('temperature', { ns: 'aquarium' })}
              withoutShadow
              content="dsdas"
            />
          </Col>
        </Row>
      </OptionsTile>
    </div>
  );
};

export default Dashboard;
