import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  faAngleLeft,
  faAngleRight,
  faCog,
  faFolder,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Divider from './Divider';
import Header from './Header';
import {
  MenuDropdown,
  MenuDropdownHeader,
  MenuDropdownItem,
  MenuItem,
} from './menu';

import './style.scss';

const Sidebar = () => {
  const { t } = useTranslation(['configuration']);
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen((prev) => !prev);

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        isOpen && 'toggled'
      }`}
    >
      <a className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">AQUASHARP</div>
      </a>
      <Divider additionalClasses="my-0" />
      <MenuItem
        text={t('Dashboard')}
        icon={faTachometerAlt}
        href="/dashboard"
      />
      <Divider />
      <Header text={t('INTERFACE')} />
      <MenuDropdown icon={faCog} text={t('Settings')}>
        <MenuDropdownHeader text={t('Settings')} />
        <MenuDropdownItem text={t('Add aquarium')} href="/newAquarium" />
      </MenuDropdown>
      <MenuDropdown icon={faFolder} text={t('My aquariums')}>
        <MenuDropdownHeader text={t('My aquariums')} />
        <MenuDropdownItem
          text={t('Aquarium', { ns: 'aquarium' }) + ' 1'}
          href="/aquarium/1"
        />
      </MenuDropdown>
      <Divider />
      <div className="text-center">
        <div className="trigger" onClick={handleTrigger}>
          <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleLeft} />
        </div>
      </div>
    </ul>
  );
};

export default Sidebar;
