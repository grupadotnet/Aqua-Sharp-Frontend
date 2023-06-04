import { Link } from 'react-router-dom';

type Props = {
  text: string;
  href: string;
};

const MenuDropdownItem = ({ text, href }: Props) => (
  <Link className="collapse-item" to={href}>
    {text}
  </Link>
);

export default MenuDropdownItem;