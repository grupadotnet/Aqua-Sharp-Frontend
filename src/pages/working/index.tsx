import { useTranslation } from 'react-i18next';
import { languages } from '../../assets/languages';
import i18next from 'i18next';
import { BarChart, ChartWrapper, LineChart } from '../../components/chart';
import { exampleData } from '../../components/chart/config';
import { CategoryScale } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import DataTile from '../../components/dataTile';
import { Col } from 'react-bootstrap';

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
      {/* data tile start */}
      <div style={{ margin: 'auto', width: '80%', display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center'}}>
        <DataTile theme='green'>pH 7</DataTile>
        <DataTile theme='blue'>kolejna wartość</DataTile>
        <DataTile theme='yellow'>jakaś wartość</DataTile>
        <DataTile theme='teal'>2137</DataTile>
        <DataTile theme='green' title='customowy tytuł 1'>abc</DataTile>
        <DataTile theme='blue' title='customowy tytuł 2'>acb</DataTile>
        <DataTile theme='yellow' title='customowy tytuł 3'>bca</DataTile>
        <DataTile theme='teal' title='customowy tytuł 4'>bac</DataTile>
      </div>
      {/* data tile end */}
    </div>
  );
};
