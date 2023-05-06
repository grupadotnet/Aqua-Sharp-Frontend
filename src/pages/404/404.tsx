import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './404.scss';

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <Col className="text-center">
      <div className="error mx-auto shake">{t('404', { ns: 'errors' })}</div>
      <p className="lead text-gray-800 mb-5">
        {t('Page Not Found', { ns: 'errors' })}
      </p>
      <p className="lead text-gray-500 mb-0">
        {t('It looks like you found a glitch in the matrix...', {
          ns: 'errors',
        })}
      </p>
      <Nav.Item className="link text-primary">
        <Nav.Link className="text-primary" href="/dashboard">
          <FontAwesomeIcon icon={faArrowLeft} />
          {t('Back to Dashboard', { ns: 'configuration' })}
        </Nav.Link>
      </Nav.Item>
    </Col>
  );
};

export default PageNotFound;
