import React from 'react';
import { useTranslation } from 'react-i18next';

import i18next from 'i18next';

import { languages } from '@/assets/languages';

import Dropdown from './Dropdown';

const LanguageDropdown = () => {
  const { t } = useTranslation();

  return (
    <Dropdown
      title={t('select language')}
      onClick={(code: string) => i18next.changeLanguage(code)}
      items={languages.map((lang) => ({
        label: t(lang.name),
        value: lang.code,
      }))}
    />
  );
};

export default LanguageDropdown;
