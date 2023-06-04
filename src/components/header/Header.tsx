import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

import userIcon from '@/assets/images/user.svg';

import LanguageDropdown from '../dropdown/LanguageDropdown';

type Props = {
  username: string;
};

const Header = ({ username }: Props) => {
  return (
    <Nav className="bg-white px-4 topbar mb-4 static-top shadow justify-content-end">
      <Nav.Item className="d-flex align-items-center gap-3 h-100">
        <Col>
          <LanguageDropdown />
        </Col>
        <Col>{username}</Col>
        <Image width="35" fluid rounded src={userIcon} />
      </Nav.Item>
    </Nav>
  );
};

export default Header;
