import Button from 'react-bootstrap/Button';

import { faDownload, faGear, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const Splitbutton = () => {
  return (
    <div>
      <Button variant="primary">
        {' '}
        <FontAwesomeIcon icon={faDownload} className="icon"></FontAwesomeIcon>
        Pobierz konfigurację
      </Button>
      <Button variant="secondary">
        {' '}
        <FontAwesomeIcon icon={faTrash} className="icon"></FontAwesomeIcon>
        Ustawienia
      </Button>
      <Button variant="danger">
        {' '}
        <FontAwesomeIcon icon={faGear} className="icon"></FontAwesomeIcon>
        Usuń
      </Button>
    </div>
  );
};

export default Splitbutton;
