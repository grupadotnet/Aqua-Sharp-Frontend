import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Error.scss';

type Props = {
  statusCode: number;
  message?: string;
};

const Error = ({ statusCode, message }: Props) => {
  const { t } = useTranslation(['errors']);

  const translatedMessage = t(message || statusCode.toString());

  return (
    <Col className="text-center">
      <div className="error mx-auto shake">{statusCode}</div>
      <p className="lead text-gray-800 mb-5">
        {translatedMessage === statusCode.toString()
          ? t('Unknown error')
          : translatedMessage}
      </p>
      <p className="lead text-gray-500 mb-0">
        {t('It looks like you found a glitch in the matrix...')}
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

export default Error;
