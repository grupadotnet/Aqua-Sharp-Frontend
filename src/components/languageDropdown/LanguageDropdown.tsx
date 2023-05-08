import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { t } = useTranslation();
  return (
    <DropdownButton title={t('select language')}>
      <Dropdown.Item href="#/action-1">Polski</Dropdown.Item>
      <Dropdown.Item href="#/action-2">English</Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageDropdown;
