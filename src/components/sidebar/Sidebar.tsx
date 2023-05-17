import { useState } from 'react';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen((prev) => !prev);
  return (
    <div className={`column-1 ${isOpen ? 'column-1--open' : ''}`}>
      <div className="logo">
        <p className="aqua text-center text-uppercase text-light pt-3 bold">
          aquasharp
        </p>
      </div>
      <div className="text-center">
        <div className="trigger" onClick={handleTrigger}>
          <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleLeft} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
