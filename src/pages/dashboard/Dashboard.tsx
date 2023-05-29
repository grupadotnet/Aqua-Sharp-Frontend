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
        dropdownHeader={t('options', { ns: 'common' })}
        dropdownItems={[
          { label: t('details', { ns: 'common' }), value: 'aquarium/123' },
          {
            label: t('configure', { ns: 'common' }),
            value: 'aquarium/123/edit',
          },
        ]}
        dropdownOnClick={(code: string) => {
          navigate(`/${code}`, { replace: true });
        }}
      >
        <Row lg={4} md={2} sm={2} className="justify-content-md-center m-3">
          <Col sm>
            <DataCard
              theme="primary"
              title={t('temperature', { ns: 'aquarium' })}
            >
              23&#8451;
            </DataCard>
          </Col>
          <Col sm>
            <DataCard theme="success" title={t('water ph', { ns: 'aquarium' })}>
              pH 7
            </DataCard>
          </Col>
          <Col sm>
            <DataCard
              theme="info"
              title={t('light status', { ns: 'aquarium' })}
            >
              {t('turned on', { ns: 'common' })}
            </DataCard>
          </Col>
          <Col sm>
            <DataCard
              theme="warning"
              title={t('heater status', { ns: 'aquarium' })}
            >
              {t('turned off', { ns: 'common' })}
            </DataCard>
          </Col>
        </Row>
      </OptionsTile>
    </div>
  );
};

export default Dashboard;
