import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const LanguageDropdown = () => {
  return (
    <DropdownButton title="Wybierz język">
      <Dropdown.Item href="#/action-1">Polski</Dropdown.Item>
      <Dropdown.Item href="#/action-2">English</Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageDropdown;