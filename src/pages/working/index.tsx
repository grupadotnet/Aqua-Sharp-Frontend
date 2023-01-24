import { useTranslation } from 'react-i18next';
import { languages } from '../../assets/languages';
import i18next from 'i18next';
import Chart, { exampleData } from '../../components/chart';

export const Working: React.FC = () => {
  const { t } = useTranslation();

  const name = 'Wiktor';

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
      <div style={{ margin: 'auto', width: '50%' }}>
        <Chart
          // minimum on y axis (optional - not giving minimum makes the lowest value as minimum)
          minY={20000}
          // maximum on y axis (optional - not giving maximum makes the highest value as maximum)
          maxY={100000}
          // data displayed on x axis, it has to be array of numebers/strings (required)
          dataX={exampleData.map((el) => el.year)}
          // data displayed on y axis, it has to be array of numbers/string (required)
          dataY={exampleData.map((el) => el.userGain)}
        />
      </div>
      {/* chart end */}
    </div>
  );
};
