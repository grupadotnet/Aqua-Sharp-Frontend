import { useTranslation } from 'react-i18next';
import { languages } from '../../assets/languages';
import i18next from 'i18next';
import Chart from '../../components/chart';

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
      <Chart />
      {/* chart end */}
    </div>
  );
};
