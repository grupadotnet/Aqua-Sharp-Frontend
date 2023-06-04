import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  text: string;
  icon: IconProp;
  href: string;
};

const MenuItem = ({ icon, text, href }: Props) => (
  <li className="nav-item active">
    <a className="nav-link" href={href}>
      <i>
        <FontAwesomeIcon icon={icon} />
      </i>
      <span>{text}</span>
    </a>
  </li>
);

export default MenuItem;
