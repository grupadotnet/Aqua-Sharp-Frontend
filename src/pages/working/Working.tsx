import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { faTrash, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  const name = 'Wiktor';

  ChartJS.register(CategoryScale);

  return (
    <div>
      {/* i18next start */}
      <Title title={t('welcome to react')} />
      <p>{t('variable example', { name })}</p>

      <LanguageDropdown />

      {/* i18next end */}
      {/* chart start */}
      {/* wysokość wykresów będziemy definiowali za pomocą scss'a - podajemy nazwę klasy i tworzymy style dla wrappera w zależności od naszych aktualnych potrzeb */}
      <ChartWrapper className="chart-wrapper">
        {/* xs, sm, md określają ile kolumn z dwunastu powinien zająć nasz wykres. Przykład: md={6} => wykres zajmie 6 z 12 kolumn, więc połowę dostępnego obszaru (w naszym przypadku 100vw) */}
        <Col xs={12} sm={12} md={6}>
          <BarChart // minimum on y axis (optional - not giving minimum makes the lowest value as minimum)
            minY={0}
            // maximum on y axis (optional - not giving maximum makes the highest value as maximum)
            maxY={100000}
            // data displayed on x axis, it has to be array of numbers/strings (required)
            dataX={exampleData.map((el) => el.year)}
            // data displayed on y axis, it has to be array of numbers/string (required)
            dataY={exampleData.map((el) => el.userGain)}
            // title of an X axis, it has to be string (optional)
            titleX="years"
            // title of an Y axis, it has to be string (optional)
            titleY="user gain"
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <LineChart // minimum on y axis (optional - not giving minimum makes the lowest value as minimum)
            minY={20000}
            // maximum on y axis (optional - not giving maximum makes the highest value as maximum)
            maxY={100000}
            // data displayed on x axis, it has to be array of numbers/strings (required)
            dataX={exampleData.map((el) => el.year)}
            // data displayed on y axis, it has to be array of numbers/string (required)
            dataY={exampleData.map((el) => el.userGain)}
            // title of an X axis, it has to be string (optional)
            titleX="years"
            // title of an Y axis, it has to be string (optional)
            titleY="user gain"
          />
        </Col>
      </ChartWrapper>
      {/* chart end */}
      {/* cards start */}
      <Row className="justify-content-md-center my-3">
        <Card theme="primary">Testowy children</Card>
        <Card theme="success">Testowy children</Card>
        <Card theme="info">Testowy children</Card>
        <Card theme="warning">Testowy children</Card>
      </Row>
      <Row className="justify-content-md-center my-3">
        <DataCard theme="primary" title="Jakiś Tytuł">
          Przykładowa wartość
        </DataCard>
        <DataCard theme="success" title="earnings (ANNUAL)">
          $215,000
        </DataCard>
        <DataCard theme="info" title="Temperatura mojego obiadu">
          2137
        </DataCard>
        <DataCard theme="warning" title="Temperatura mojego obiadu">
          5PLN
        </DataCard>
      </Row>
      <Row className="justify-content-md-center my-3">
        <LightControlCard />
      </Row>
      {/* cards end */}
      {/* button start */}
      <Button variant="primary">primary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="secondary">secondary</Button>
      {/* button end */}
      {/* input start */}
      <Row className="justify-content-md-center">
        <Form>
          <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Input placeholder="Podaj login" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <EmailInput placeholder="Podaj email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Hasło</Form.Label>
            <PasswordInput placeholder="Podaj hasło" />
          </Form.Group>
          <div className="d-flex flex-column my-3">
            <Button variant="primary" type="submit">
              Zaloguj
            </Button>
          </div>
        </Form>
      </Row>
      <Tile header="Earnings Overview">
        <div>Siemano</div>
      </Tile>
      {/* input end */}
      {/* Circular Buttons start */}
      <CircularButton variant="primary">
        <FontAwesomeIcon icon={faTrash} />
      </CircularButton>
      <CircularButton variant="danger">
        <FontAwesomeIcon icon={faUser} />
      </CircularButton>
      <CircularButton variant="success">
        <FontAwesomeIcon icon={faX} />
      </CircularButton>
      {/* Circular Buttons end */}
    </div>
  );
};

export default Working;
