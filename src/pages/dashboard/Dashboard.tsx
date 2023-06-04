import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { DataCard, OptionsTile } from '@/components';
import { api } from '@/services/axios';
import { Aquarium } from '@/types/aquarium/aquarium';

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [aquariums, setAquariums] = useState<Aquarium[]>([]);

  useEffect(() => {
    api
      .get('/Aquarium')
      .then((res) => {
        if (res.data && res.status === 200) {
          setAquariums(res.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {aquariums.map((aquarium) => (
        <OptionsTile
          key={aquarium.aquariumId}
          tileHeader={`${t('aquarium', { ns: 'aquarium' })} ${
            aquarium.aquariumId
          }`}
          header={t('options', { ns: 'common' })}
          items={[
            {
              label: t('details', { ns: 'common' }),
              value: aquarium.aquariumId.toString(),
            },
            {
              label: t('configure', { ns: 'common' }),
              value: `${aquarium.aquariumId.toString()}/edit`,
            },
          ]}
          onClick={(code: string) => {
            navigate(`/aquarium/${code}`, { replace: true });
          }}
        >
          <Row lg={3} md={2} sm={2} className="justify-content-md-center m-3">
            <Col sm>
              <DataCard
                theme="primary"
                title={t('current temperature', { ns: 'aquarium' })}
                withoutShadow
                content={aquarium.temperature + '\u00b0'}
              />
            </Col>
            <Col sm>
              <DataCard
                theme="success"
                title={t('current ph', { ns: 'aquarium' })}
                withoutShadow
                content={aquarium.ph}
              />
            </Col>
            <Col sm>
              <DataCard
                theme="info"
                title={t('light status', { ns: 'aquarium' })}
                withoutShadow
                content={
                  new Date() > aquarium.dawn && aquarium.sunset
                    ? t('turned on', { ns: 'aquarium' })
                    : t('turned off', { ns: 'aquarium' })
                }
              />
            </Col>
          </Row>
        </OptionsTile>
      ))}
    </div>
  );
};

export default Dashboard;
