import { useTranslation } from 'react-i18next';
import { languages } from '../../assets/languages';
import i18next from 'i18next';
import { BarChart, LineChart } from '../../components/chart';
import { exampleData } from '../../components/chart/config';
import { CategoryScale } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import DataTile from '../../components/dataTile';

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
      <div style={{ margin: 'auto', width: '50%', height: '400px' }}>
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
      </div>
      <div style={{ margin: 'auto', width: '50%', height: '400px' }}>
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
      </div>
      {/* chart end */}
      {/* data tile start */}
      <div style={{ margin: 'auto', width: '80%', display: 'flex' }}>
        <DataTile></DataTile>
      </div>
      {/* data tile end */}
    </div>
  );
};
