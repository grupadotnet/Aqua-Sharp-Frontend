import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { faTrash, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { CategoryScale } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';

import {
  BarChart,
  Button,
  Card,
  ChartWrapper,
  CircularButton,
  DataCard,
  EmailInput,
  exampleData,
  Input,
  LanguageDropdown,
  LightControlCard,
  LineChart,
  PasswordInput,
  Tile,
  Title,
} from '@/components';

import './Working.scss';

const Working = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Tile header="Akwarium 1">
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
      </Tile>
    </div>
  );
};

export default Working;
