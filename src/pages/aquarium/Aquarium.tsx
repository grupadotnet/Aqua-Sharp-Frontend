import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import { BarChart, DataCard, LineChart, Tile } from '@/components';
import { api } from '@/services/axios';
import {
  Aquarium as AquariumType,
  PaginatedAquarium,
} from '@/types/aquarium/aquarium';
import { Measurement } from '@/types/measurement/measurement';

const Aquarium = () => {
  const { t } = useTranslation();
  const [aquarium, setAquarium] = useState<PaginatedAquarium>(
    {} as PaginatedAquarium
  );

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      api.get<AquariumType>(`Aquarium/${params.id}`).then((res) => res.data),
      api
        .get<Measurement[]>('Measurement/pagination', {
          params: {
            aquariumId: params.id,
            page: 1,
          },
        })
        .then((res) => res.data),
    ])
      .then(([aquarium, paginated]) => {
        setAquarium({
          aquariumId: aquarium.aquariumId,
          name: aquarium.name,
          sunset: aquarium.sunset,
          dawn: aquarium.dawn,
          temperatures: paginated
            .map(({ temperature, time }) => ({
              temperature,
              time: new Date(time),
            }))
            .sort((a, b) => a.time.getTime() - b.time.getTime())
            .slice(0, 10),
          phs: paginated
            .map(({ ph, time }) => ({
              ph,
              time: new Date(time),
            }))
            .sort((a, b) => a.time.getTime() - b.time.getTime())
            .slice(0, 10),
        });
      })
      .catch((e) => {
        console.log(e.response.status);
        if (e.response.status === 404) {
          navigate('/404');
        }
      });
  }, []);

  return (
    <div>
      <header className="fw-semibold text-capitalize mb-4 h3">{`${t(
        'aquarium',
        { ns: 'aquarium' }
      )} ${params.id}`}</header>
      <Row>
        <Col lg={4} md={4} xs={12}>
          <DataCard
            theme="primary"
            title={t('current temperature', { ns: 'aquarium' })}
            content={
              aquarium.temperatures &&
              aquarium.temperatures.length &&
              aquarium.temperatures[aquarium.temperatures.length - 1]
                .temperature + '\u00b0'
            }
          />
        </Col>
        <Col lg={4} md={4} xs={12}>
          <DataCard
            theme="success"
            title={t('current ph', { ns: 'aquarium' })}
            content={
              aquarium.phs &&
              aquarium.phs.length &&
              aquarium.phs[aquarium.phs.length - 1].ph
            }
          />
        </Col>
        <Col lg={4} md={4} xs={12}>
          <DataCard
            theme="info"
            title={t('light status', { ns: 'aquarium' })}
            content={
              new Date() > aquarium.dawn && aquarium.sunset
                ? t('turned on', { ns: 'aquarium' })
                : t('turned off', { ns: 'aquarium' })
            }
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12} sm={12} className="w-100">
          <Tile header={t('temperature', { ns: 'aquarium' })}>
            <LineChart
              minY={0}
              maxY={30}
              dataX={
                aquarium.temperatures
                  ? aquarium.temperatures.map(({ time }) =>
                      time.toLocaleTimeString()
                    )
                  : []
              }
              dataY={
                aquarium.temperatures
                  ? aquarium.temperatures.map(({ temperature }) => temperature)
                  : []
              }
            />
          </Tile>
        </Col>
        <Col lg={6} md={12} sm={12} className="w-100">
          <Tile header={t('water ph', { ns: 'aquarium' })}>
            <BarChart
              minY={0}
              maxY={14}
              dataX={
                aquarium.phs
                  ? aquarium.phs.map(({ time }) => time.toLocaleTimeString())
                  : []
              }
              dataY={aquarium.phs ? aquarium.phs.map(({ ph }) => ph) : []}
            />
          </Tile>
        </Col>
      </Row>
    </div>
  );
};

export default Aquarium;
