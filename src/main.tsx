import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LoadingSpinner from './components/loadingSpinner';

import App from './App';

import './index.scss';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './assets/bootstrap/css/sb-admin-2.min.css';

// i18n config
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['pl', 'en'],
    fallbackLng: 'en',
    detection: {
      order: [
        'path',
        'cookie',
        'navigator',
        'htmlTag',
        'localStorage',
        'subdomain',
      ],
      caches: ['cookie'],
      // cookieMinutes: time after cookie expires,
      // cookieDomain: our future domain,
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<LoadingSpinner />}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
