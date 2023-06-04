import { useState } from 'react';
import { Link } from 'react-router-dom';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: IconProp;
  text: string;
  children?: React.ReactNode;
};

const MenuDropdown = ({ icon, text, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleTrigger = () => setIsOpen((prev) => !prev);

  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${isOpen && 'collapsed'}`}
        to={'#'}
        onClick={handleTrigger}
        data-target={`#collapse${text}`}
        aria-expanded={isOpen}
        aria-controls={`#collapse${text}`}
      >
        <i>
          <FontAwesomeIcon icon={icon} />
        </i>
        <span>{text}</span>
      </Link>
      <div id={`#collapse${text}`} className={`collapse ${isOpen && 'show'}`}>
        <div className="bg-white py-2 collapse-inner rounded">{children}</div>
      </div>
    </li>
  );
};

export default MenuDropdown;
