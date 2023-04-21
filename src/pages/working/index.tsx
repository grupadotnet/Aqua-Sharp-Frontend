import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

import { CategoryScale } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import i18next from 'i18next';

import { languages } from '@/assets/languages';
import {
  BarChart,
  Button,
  ChartWrapper,
  DataTile,
  EmailInput,
  exampleData,
  Input,
  LanguageDropdown,
  LightControlTile,
  LineChart,
  PasswordInput,
  Tile,
} from '@/components';

import './Working.scss';

export const Working: React.FC = () => {
  const { t } = useTranslation();

  const name = 'Wiktor';

  ChartJS.register(CategoryScale);

  return (
    <div>
      {/* i18next start */}
      <h1>{t('welcome_to_react')}</h1>
      <p>{t('variable_example', { name })}</p>

      {/* LANGUAGE SWITCH WORKING VERSION */}
      <ul>
        {languages.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button onClick={() => i18next.changeLanguage(code)}>
              <span className={`fi fi-${country_code}`}></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
      <LanguageDropdown></LanguageDropdown>

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
      {/* tiles start */}
      <Row className="justify-content-md-center my-3">
        <Tile theme="primary">Testowy children</Tile>
        <Tile theme="success">Testowy children</Tile>
        <Tile theme="info">Testowy children</Tile>
        <Tile theme="warning">Testowy children</Tile>
      </Row>
      <Row className="justify-content-md-center my-3">
        <DataTile theme="primary" title="Jakiś Tytuł">
          Przykładowa wartość
        </DataTile>
        <DataTile theme="success" title="earnings (ANNUAL)">
          $215,000
        </DataTile>
        <DataTile theme="info" title="Temperatura mojego obiadu">
          2137
        </DataTile>
        <DataTile theme="warning" title="Temperatura mojego obiadu">
          5PLN
        </DataTile>
      </Row>
      <Row className="justify-content-md-center my-3">
        <Col></Col>
        <Col>
          <LightControlTile />
        </Col>
        <Col></Col>
      </Row>
      {/* tiles end */}
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
      {/* input end */}
    </div>
  );
};
